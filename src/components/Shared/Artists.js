import React, { Component } from 'react';
import { Row, Col, NavbarBrand } from 'reactstrap';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export class Artists extends Component {
    getArtists() {
        var splitData = _.orderBy(this.props.data, (artist) => { return artist.popularity }, 'desc').slice(0,this.props.limit);

        return splitData.map((artist) =>
            <Col key={artist.id}>
                <Row>
                    <img className="circle-artist" src={artist.images[0]?.url} alt={artist.name} style={{aspectRatio: '1'}}></img>
                </Row>
                <Row className='justify-content-center'>
                    <div className='bg-artist'><NavbarBrand><h6>{artist.name}</h6></NavbarBrand></div>
                </Row>
            </Col>
        )
    }
    
    render() {
        if (!this.props.data){
            return (
                <h1>Loading...</h1>
            )
        }

        return this.getArtists();
    }
}
