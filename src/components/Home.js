import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { UserDetails } from './UserDetails';
import { RecentlyPlayed } from './RecentlyPlayed';
import { TopArtists } from './TopArtists';
import { TopTracks } from './TopTracks';

export class Home extends Component {
    constructor() {
        super()
        window.history.pushState("", "", document.location.origin);
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <UserDetails></UserDetails>
                </Row>
                <Row>
                    <RecentlyPlayed></RecentlyPlayed>
                </Row>
                <Row>
                    <Col>
                        <TopArtists link={'TopArtistsShortTerm'} time_range={'short_term'}></TopArtists>
                    </Col>
                    <Col>
                        <TopArtists link={'TopArtistsMediumTerm'} time_range={'medium_term'}></TopArtists>
                    </Col>
                    <Col>
                        <TopArtists link={'TopArtistsLongTerm'} time_range={'long_term'}></TopArtists>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TopTracks link={'TopTracksShortTerm'} time_range={'short_term'}></TopTracks>
                    </Col>
                    <Col>
                        <TopTracks link={'TopTracksMediumTerm'} time_range={'medium_term'}></TopTracks>
                    </Col>
                    <Col>
                        <TopTracks link={'TopTracksLongTerm'} time_range={'long_term'}></TopTracks>
                    </Col>
                </Row>
            </Container>
        );
    }
}
