import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row } from 'reactstrap';
import { RecentlyPlayedTrackCard } from './RecentlyPlayedTrackCard';
import Cookies from 'js-cookie'

export class RecentlyPlayed extends Component {
    constructor() {
        super()

        this.state = {
            recentlyPlayed: null
        }
    }

    componentDidMount() {
        this.setState({recentlyPlayed: (this.loadData()).responseJSON});
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/player/recently-played',
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

    getRecentlyPlayedTrackCards() {
        if (this.state.recentlyPlayed){
            return this.state.recentlyPlayed.items.map((track) =>
                <RecentlyPlayedTrackCard recentlyPlayedTrack={track} ></RecentlyPlayedTrackCard>
            )
        }
        else{
            return null;
        }
    }
    
    
    render() {
        if (!this.state.recentlyPlayed){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Container>
                <Row>
                    <h1 id="RecentlyPlayed">RECENTLY PLAYED</h1>
                </Row>
                {this.getRecentlyPlayedTrackCards()}
            </Container>
        );
    }
}
