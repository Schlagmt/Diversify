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
                    <Col>
                        <TopArtists link={'TopArtistsShortTerm'} time_range={'short_term'} name={'Short Term'}></TopArtists>
                    </Col>
                    <Col>
                        <TopArtists link={'TopArtistsMediumTerm'} time_range={'medium_term'} name={'Medium Term'}></TopArtists>
                    </Col>
                    <Col>
                        <TopArtists link={'TopArtistsLongTerm'} time_range={'long_term'} name={'Long Term'}></TopArtists>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TopTracks link={'TopTracksShortTerm'} time_range={'short_term'} name={'Short Term'}></TopTracks>
                    </Col>
                    <Col>
                        <TopTracks link={'TopTracksMediumTerm'} time_range={'medium_term'} name={'Medium Term'}></TopTracks>
                    </Col>
                    <Col>
                        <TopTracks link={'TopTracksLongTerm'} time_range={'long_term'} name={'Long Term'}></TopTracks>
                    </Col>
                </Row>
                <Row>
                    <RecentlyPlayed></RecentlyPlayed>
                </Row>
            </Container>
        );
    }
}
