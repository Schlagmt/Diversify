import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col, Table } from 'reactstrap';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faDroplet, faIcicles } from '@fortawesome/free-solid-svg-icons';
import { Genres } from '../Shared/Genres'

export class Artists extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topArtists: null
        }
    }

    componentDidMount(){
        this.setState({topArtists: (this.loadData()).responseJSON});
    }

    componentDidUpdate(prevProps){
        if (prevProps.term !== this.props.term){
            this.setState({topArtists: (this.loadData()).responseJSON});
        }
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/artists?time_range=' + this.props.term + '&limit=50',
            async: false,
            contentType: "application/json; charset=utf-8",
            type: "GET",
            headers: {
                "Authorization": "Bearer " + Cookies.get('spotifyAuthToken')
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    displayTopNineArtists(){
        if (this.state.topArtists){
            var topNine = this.state.topArtists.items.slice(0,9)
            return topNine.map((artist, index) =>
                <Col key={artist.id} style={{padding: 0}}>
                    <div className='containerTrack'>
                        <img className="imageTrack" src={artist.images[0].url} alt={artist.name} style={{aspectRatio: '1'}}></img>
                        <div className="overlayTrack">{index + 1}. {artist.name} {this.popularityImage(artist.popularity)}</div>
                    </div>
                </Col>
            )
        }
        else{
            return null;
        }
    }

    displayRestArtists(){
        if (this.state.topArtists){
            var rest = this.state.topArtists.items.slice(9,50)
            return rest.map((artist, index) =>
                <tr key={artist.id}>
                    <th>
                        {index + 10}
                    </th>
                    <td>
                        <img className="imageTrack" src={artist.images[2].url} alt={artist.name} style={{maxHeight: '2em', maxWidth: '2em'}}></img>
                    </td>
                    <td>
                        {artist.name}
                    </td>
                    <td>
                        {this.popularityImage(artist.popularity)}
                    </td>
                </tr>
            )
        }
        else{
            return null;
        }
    }

    popularityImage(score){
        if (score >= 90){
            return <FontAwesomeIcon icon={faFire} style={{color: 'red'}}/>
        } else if (score >= 80){
            return <FontAwesomeIcon icon={faFire} style={{color: 'orange'}}/>
        } else if (score >= 70){
            return <FontAwesomeIcon icon={faFire} style={{color: 'yellow'}}/>
        } else if (score >= 60){
            return <FontAwesomeIcon icon={faDroplet} style={{color: 'lightblue'}}/>
        } else {
            return <FontAwesomeIcon icon={faIcicles} style={{color: 'blue'}}/>
        }
    }
    
    render() {
        if (!this.state.topArtists){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Container>
                <Row>
                    <Genres data={this.state.topArtists.items} limit={20}></Genres>
                </Row>
                <Row style={{marginBottom: "3em", marginTop: "2em"}} md="3" xs="3">
                    {this.displayTopNineArtists()}
                </Row>
                <Row style={{marginBottom: "3em", marginTop: "3em"}}>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th style={{minWidth: '57px'}}>
                                    
                                </th>
                                <th>
                                    Artist
                                </th>
                                <th>
                                    
                                </th>
                            </tr>    
                        </thead>
                        
                        <tbody>
                            {this.displayRestArtists()}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}
