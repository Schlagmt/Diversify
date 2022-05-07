import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col } from 'reactstrap';
import Cookies from 'js-cookie'

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
                <Row md="2" sm="1">
                    <Col md="auto">
                        <img src={this.state.userData.images[0].url} alt=""></img>
                    </Col>
                    <Col md="auto">
                        <h1>{this.state.userData.display_name}</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}
