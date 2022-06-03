import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col, Table } from 'reactstrap';
import Cookies from 'js-cookie';
import { Genres } from '../Shared/Genres';
import { Emoji } from '../Shared/Emoji';

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
                        <div className="overlayTrack">{index + 1}. {artist.name} <Emoji score={artist.popularity}></Emoji></div>
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
                        <Emoji score={artist.popularity}></Emoji>
                    </td>
                </tr>
            )
        }
        else{
            return null;
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
