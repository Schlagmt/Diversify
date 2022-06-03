import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col, NavbarBrand } from 'reactstrap';
import Cookies from 'js-cookie'
import { Genres } from '../Shared/Genres';

export class UserDetails extends Component {
    constructor() {
        super()

        this.state = {
            userData: null,
            genreData: null
        }
    }

    componentDidMount() {
        this.setState({userData: (this.loadUserData()).responseJSON})
        this.setState({genreData: (this.loadGenreData()).responseJSON})
    }

    loadUserData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me',
            async: false,
            contentType: "application/json; charset=utf-8",
            type: "GET",
            headers: {
                "Authorization": "Bearer " + Cookies.get('spotifyAuthToken')
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    loadGenreData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50',
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
        if (!this.state.userData){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Container>
                <Row md="2" sx="1" style={{width: '100%'}}>
                    <Col md="4" style={{paddingRight: 0, paddingLeft: 0}}>
                        <img src={this.state.userData.images[0].url} alt="user" style={{borderRadius: "50%"}}></img>
                    </Col>
                    <Col md='8'>
                        <Row className="d-flex justify-content-center">
                            <NavbarBrand><h1>{this.state.userData.display_name}</h1></NavbarBrand>
                        </Row>
                        <Genres data={this.state.genreData.items} limit={10}></Genres>
                    </Col>
                </Row>
            </Container>
        );
    }
}
