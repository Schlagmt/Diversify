import React, { Component } from 'react';
import { Col, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

export class RecommendationHome extends Component {
    render() {
        return (
            <Col>
                <img className="bg-image" src='recommend.jpg' alt='recommend' style={{aspectRatio: '3/1' ,height:"100%",width:"100%"}}></img>
                <div className="bg-text">
                    <NavbarBrand tag={Link} to='/Recommendation'>RECOMMENDATIONS</NavbarBrand>
                </div>
            </Col>
        );
    }
}
