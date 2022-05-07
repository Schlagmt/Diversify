import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Moment from 'react-moment';

export class RecentlyPlayedTrackCard extends Component {
    constructor(props) {
        super(props)
    }    
    
    render() {
        return (
            <Row>
                <Col md='auto'>
                    <img src={this.props.recentlyPlayedTrack.track.album.images[2].url}></img>
                </Col>
                <Col>
                    <h5>{this.props.recentlyPlayedTrack.track.name}</h5>
                    <hr/>
                    <Row md='3' sm='1'>
                        <Col md='auto'>
                            <p>{this.props.recentlyPlayedTrack.track.album.name}</p>
                        </Col>
                        <Col md='auto'>
                            <p>{this.props.recentlyPlayedTrack.track.artists[0].name}</p>
                        </Col>
                        <Col md='auto'>
                            <p><Moment>{this.props.recentlyPlayedTrack.played_at}</Moment></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
