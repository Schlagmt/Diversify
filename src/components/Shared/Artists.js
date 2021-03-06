import React, { Component } from 'react';
import { Row, Col, NavbarBrand } from 'reactstrap';
import _ from 'lodash';

export class Artists extends Component {
    getArtists() {
        var splitData = _.orderBy(this.props.data, (artist) => { return artist.popularity }, 'desc').slice(0,this.props.limit);

        return splitData.map((artist) =>
            <Col key={artist.id}>
                <Row>
                    <a className="circle-artist" href={artist.external_urls.spotify} target='_blank' rel="noreferrer">
                        <img className="circle-artist" src={artist.images[0]?.url} alt={artist.name} style={{aspectRatio: '1'}}></img>
                    </a>
                </Row>
                <Row className='justify-content-center' style={{overflow: 'hidden'}}>
                    <NavbarBrand><div className='bg-artist'><h6>{artist.name}</h6></div></NavbarBrand>
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
