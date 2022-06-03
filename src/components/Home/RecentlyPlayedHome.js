import React, { Component } from 'react';
import $ from 'jquery';
import { Col, NavbarBrand } from 'reactstrap';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export class RecentlyPlayedHome extends Component {
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
            <Col style={{marginBottom: '2em'}}>
                <img className="bg-image" src={this.state.recentlyPlayed.items[0].track.album.images[0].url} alt={this.state.recentlyPlayed.items[0].track.album.name} style={{aspectRatio: '1',maxHeight:"100%",maxWidth:"100%"}}></img>
                <div className="bg-text">
                    <NavbarBrand tag={Link} to='/RecentlyPlayed'>HISTORY</NavbarBrand>
                </div>
            </Col>
        );
    }
}
