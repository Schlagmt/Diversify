import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col, Table } from 'reactstrap';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faDroplet, faIcicles } from '@fortawesome/free-solid-svg-icons';

export class Tracks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topTracks: null
        }
    }

    componentDidMount(){
        this.setState({topTracks: (this.loadData()).responseJSON});
    }

    componentDidUpdate(prevProps){
        if (prevProps.term !== this.props.term){
            this.setState({topTracks: (this.loadData()).responseJSON});
        }
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/tracks?time_range=' + this.props.term + '&limit=50',
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

    displayTopNineTracks(){
        if (this.state.topTracks){
            var topNine = this.state.topTracks.items.slice(0,9)
            return topNine.map((track, index) =>
                <Col key={track.id} style={{padding: 0}}>
                    <div className='containerTrack'>
                        <img  className="imageTrack" src={track.album.images[0].url} alt={track.name}></img>
                        <div class="overlayTrack">
                            {index + 1}. {track.name} {this.popularityImage(track.popularity)}
                            <div style={{fontSize: 'xx-small'}}>{track.album.artists[0].name}</div>
                        </div>
                    </div>
                </Col>
            )
        }
        else{
            return null;
        }
    }

    displayRestTracks(){
        if (this.state.topTracks){
            var rest = this.state.topTracks.items.slice(9,50)
            return rest.map((track, index) =>
                <tr>
                    <th>
                        {index + 10}
                    </th>
                    <td>
                        <img  className="imageTrack" src={track.album.images[2].url} alt={track.name} style={{maxHeight: '2em', maxWidth: '2em'}}></img>
                    </td>
                    <td>
                        {track.name}<div style={{fontSize: 'xx-small'}}>{track.album.artists[0].name}</div>
                    </td>
                    <td>
                        {this.popularityImage(track.popularity)}
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
        if (!this.state.topTracks){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Container>
                <Row md="3" xs="3">
                    {this.displayTopNineTracks()}
                </Row>
                <Row style={{marginBottom: "3em", marginTop: "3em"}}>
                    <Table>
                        <tr>
                            <th>
                                #
                            </th>
                            <th style={{minWidth: '57px'}}>
                                
                            </th>
                            <th>
                                Track
                            </th>
                            <th>
                                
                            </th>
                        </tr>
                        {this.displayRestTracks()}
                    </Table>
                </Row>
            </Container>
        );
    }
}
