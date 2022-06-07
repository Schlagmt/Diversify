import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col } from 'reactstrap';
import Cookies from 'js-cookie';
import { Emoji } from '../Shared/Emoji';
import Moment from 'react-moment';

export class PlayedTracks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recentTracks: null
        }
    }

    componentDidMount(){
        this.setState({recentTracks: (this.loadData()).responseJSON});
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/player/recently-played?limit=50',
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

    displayRecentTracks(){
        if (this.state.recentTracks){
            return this.state.recentTracks.items.map((track, index) =>
                <Col key={index} style={{padding: 0}}>
                    <div className='containerTrack'>
                        <img className="imageTrack" src={track.track.album.images[0].url} alt={track.track.name}></img>
                        <div className="overlayTrack">
                            {index + 1}. {track.track.name} <Emoji score={track.track.popularity}></Emoji>
                            <div style={{fontSize: 'xx-small'}}>{track.track.album.artists[0].name}</div>
                            <div style={{fontSize: 'xx-small'}}><Moment format="YYYY/MM/DD hh:mm">{track.played_at}</Moment></div>
                        </div>
                    </div>
                </Col>
            )
        }
        else{
            return null;
        }
    }
    
    render() {
        if (!this.state.recentTracks){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Container>
                <Row md="3" xs="3">
                    {this.displayRecentTracks()}
                </Row>
            </Container>
        );
    }
}
