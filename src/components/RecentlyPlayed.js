import React, { Component } from 'react';
import $ from 'jquery';
import { Col } from 'reactstrap';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

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
        if (!this.state.recentlyPlayed){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Col>
                <img className="bg-image" src={this.state.recentlyPlayed.items[0].track.album.images[0].url} style={{maxHeight:"100%",maxWidth:"100%"}}></img>
                <div className="bg-text">
                    <h1>My Recently Played</h1>
                </div>
            </Col>
        );
    }
}
