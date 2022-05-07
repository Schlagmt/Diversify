import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col } from 'reactstrap';
import Cookies from 'js-cookie'

export class TopTracks extends Component {
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
            url: 'https://api.spotify.com/v1/me/top/tracks?time_range=' + this.props.time_range + '&limit=50',
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
            <h1 id={this.props.link}>Top Track</h1>
        );
    }
}
