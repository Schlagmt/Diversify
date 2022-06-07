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
            <Col style={{marginBottom: '2em'}}>
                <img className="bg-image" src={this.state.topTracks.items[0].album.images[0].url} alt={this.state.topTracks.items[0].album.name} style={{aspectRatio: '1/1' ,height:"100%",width:"100%"}}></img>
                <div className="bg-text">
                    <NavbarBrand tag={Link} to='/TopTracks'>TOP TRACKS</NavbarBrand>
                </div>
            </Col>
        );
    }
}
