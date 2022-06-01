import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { UserDetails } from './UserDetails';
import { RecentlyPlayed } from './RecentlyPlayed';
import { TopArtistsHome } from './TopArtistsHome';
import { TopTracksHome } from './TopTracksHome';

export class Home extends Component {
    constructor() {
        super()
        window.history.pushState("", "", document.location.origin);
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
                    <RecentlyPlayed></RecentlyPlayed>
                </Row>
            </Container>
        );
    }
}
