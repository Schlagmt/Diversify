import React, { Component } from 'react';
import { Col, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

export class RecommendationHome extends Component {
    render() {
        return (
            <Col>
                <img className="bg-image" src='' alt='recommend' style={{maxHeight:"100%",maxWidth:"100%"}}></img>
                <div className="bg-text">
                    <NavbarBrand tag={Link} to='/Recommendation'><h1>RECOMMENDATIONS</h1></NavbarBrand>
                </div>
            </Col>
        );
    }
}
