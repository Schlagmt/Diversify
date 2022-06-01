import React, { Component } from 'react';
import $ from 'jquery';
import { Col } from 'reactstrap';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export class TopArtistsHome extends Component {
    constructor() {
        super()

        this.state = {
            topArtists: null
        }     
    }

    componentDidMount(){
        this.setState({topArtists: (this.loadData()).responseJSON});
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=1',
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
        if (!this.state.topArtists){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Col>
                <img className="bg-image" src={this.state.topArtists.items[0].images[0].url} style={{maxHeight:"100%",maxWidth:"100%"}}></img>
                <div className="bg-text">
                    <h1>My Top Artists</h1>
                </div>
            </Col>
        );
    }
}
