import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col } from 'reactstrap';
import { TopArtistCard } from './TopArtistCard';
import Cookies from 'js-cookie'

export class TopArtists extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topArtists: null
        }     
    }

    componentDidMount(){
        this.setState({topArtists: (this.loadData()).responseJSON});
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/artists?time_range=' + this.props.time_range + '&limit=50',
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

    getTopArtistCards() {
        if (this.state.topArtists){
            return this.state.topArtists.items.map((artist) =>
                <TopArtistCard topArtist={artist} ></TopArtistCard>
            )
        }
        else{
            return null;
        }
    }
    
    render() {
        if (!this.state.topArtists){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Container>
                <Row>
                    <h1 id={this.props.link}>TOP ARTISTS ({this.props.name})</h1>
                </Row>
                {this.getTopArtistCards()}
            </Container>
        );
    }
}
