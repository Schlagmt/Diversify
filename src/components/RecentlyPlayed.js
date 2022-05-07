import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row } from 'reactstrap';
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
    
    render() {
        return (
            <h1 id="RecentlyPlayed">Recently Played</h1>
        );
    }
}
