import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col } from 'reactstrap';
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
            url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50',
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
                <Row style={{width: '100%'}}>
                    <Col lg="4" style={{textAlign: 'center'}}>
                        <img src={this.state.userData.images[0].url} alt="user" style={{borderRadius: "50%"}}></img>
                    </Col>
                    <Col lg='8'>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h1>{this.state.userData.display_name}</h1>
                            </Col>
                        </Row>
                        <Genres data={this.state.genreData.items} limit={30}></Genres>
                    </Col>
                </Row>
            </Container>
        );
    }
}
