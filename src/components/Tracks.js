import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col, ButtonGroup, Button, Card, CardTitle, CardSubtitle } from 'reactstrap';
import Cookies from 'js-cookie';

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

    displayTracks(){
        if (this.state.topTracks){
            return this.state.topTracks.items.map((track) =>
                <Col>
                    <div className='containerTrack'>
                        <img  className="imageTrack" src={track.album.images[0].url} alt={track.name}></img>
                    </div>
                </Col>
            )
        }
        else{
            return null;
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
                <Row md="4" xs="1">
                    {this.displayTracks()}
                </Row>
            </Container>
        );
    }
}
