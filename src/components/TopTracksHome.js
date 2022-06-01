import React, { Component } from 'react';
import $ from 'jquery';
import { Col, NavbarBrand } from 'reactstrap';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export class TopTracksHome extends Component {
    constructor() {
        super()

        this.state = {
            topTracks: null
        }
    }

    componentDidMount(){
        this.setState({topTracks: (this.loadData()).responseJSON});
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1',
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
        if (!this.state.topTracks){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Col>
                <img className="bg-image" src={this.state.topTracks.items[0].album.images[0].url} style={{maxHeight:"100%",maxWidth:"100%"}}></img>
                <div className="bg-text">
                    <NavbarBrand tag={Link} to='/TopTracks'><h1>My Top Tracks</h1></NavbarBrand>
                </div>
            </Col>
        );
    }
}
