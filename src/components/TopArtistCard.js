import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class TopArtistCard extends Component {
    constructor(props) {
        super(props)
    }    
    
    render() {
        return (
            <Row>
                <Col md='auto'>
                    <img className='top-artist-img' src={this.props.topArtist.images[2].url}></img>
                </Col>
                <Col>
                    <h5>{this.props.topArtist.name}</h5>
                    <hr/>
                    <Row md='2' sm='1'>
                        <Col md='auto'>
                            <p>{this.props.topArtist.followers.total}</p>
                        </Col>
                        <Col md='auto'>
                            <p>{this.props.topArtist.popularity}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
