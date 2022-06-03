import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { UserDetails } from './UserDetails';
import { RecentlyPlayedHome } from './RecentlyPlayedHome';
import { TopArtistsHome } from './TopArtistsHome';
import { TopTracksHome } from './TopTracksHome';
import { RecommendationHome } from './RecommendationHome';

export class Home extends Component {
    constructor() {
        super()
        window.history.pushState("", "", document.location.href);
    }
    
    render() {
        return (
            <Container>
                <Row style={{marginBottom: "3em", marginTop: "3em"}}>
                    <UserDetails></UserDetails>
                </Row>
                <Row md="3" xs="1">
                    <TopArtistsHome></TopArtistsHome>
                    <TopTracksHome></TopTracksHome>
                    <RecentlyPlayedHome></RecentlyPlayedHome>
                </Row>
                <Row style={{marginBottom: '2em'}}>
                    <RecommendationHome></RecommendationHome>
                </Row>
            </Container>
        );
    }
}
