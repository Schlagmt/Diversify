import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col, NavbarBrand } from 'reactstrap';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import { Genres } from './Genres';

export class UserDetails extends Component {
    constructor() {
        super()

        this.state = {
            userData: null
        }
    }

    componentDidMount() {
        this.setState({userData: (this.loadData()).responseJSON})
    }

    loadData(){
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

    render() {
        if (!this.state.userData){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Container>
                <Row md="2" sx="1" style={{width: '100%'}}>
                    <Col md="4">
                        <img src={this.state.userData.images[0].url} alt="user" style={{borderRadius: "50%"}}></img>
                    </Col>
                    <Col md='8'>
                        <Row>
                            <NavbarBrand><h1>{this.state.userData.display_name}</h1></NavbarBrand>
                        </Row>
                        <Genres></Genres>
                    </Col>
                </Row>
            </Container>
        );
    }
}
