import React, { Component } from 'react';
import { Row, Col, NavbarBrand } from 'reactstrap';
import _ from 'lodash';
import { Emoji } from '../Shared/Emoji';

export class Tracks extends Component {
    getTracks() {
        var splitData = _.orderBy(this.props.data, (track) => { return track.popularity }, 'desc').slice(0,this.props.limit);

        return splitData.map((track) =>
            <Col key={track.id}>
                <Row>
                    <img className='track-img' src={track.album.images[0]?.url} alt={track.name}></img>
                </Row>
                <Row>
                    <Col xs='10' style={{paddingRight: 0, paddingLeft: 0}}>
                        <Row style={{overflow: 'hidden'}}>
                            <div className='bg-track'>{track.name}</div>
                        </Row>
                        <Row style={{overflow: 'hidden'}}>
                            <div className='bg-track'>{track.album.artists[0].name}</div>
                        </Row>
                    </Col>
                    <Col xs='2' style={{paddingRight: 0, paddingLeft: 0, float: 'right'}}>
                        <Emoji score={track.popularity}></Emoji>
                    </Col>
                </Row>
            </Col>
        )
    }
    
    render() {
        if (!this.props.data){
            return (
                <h1>...</h1>
            )
        }

        return this.getTracks();
    }
}
