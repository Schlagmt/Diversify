import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { PlayedTracks } from './PlayedTracks';

export class RecentlyPlayed extends Component {
    render() {
        return (
            <Container style={{marginBottom: "2em", marginTop: "2em"}}>
                <PlayedTracks></PlayedTracks>
            </Container>
        );
    }
}
