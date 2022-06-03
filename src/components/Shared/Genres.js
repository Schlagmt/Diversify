import React, { Component } from 'react';
import { Row, Col, NavbarBrand } from 'reactstrap';
import _ from 'lodash';

export class Genres extends Component {
    getTopGenres () {

        var genres = []
        _.forEach(this.props.data, (item) => {
            _.forEach(item.genres, (genre) => {
                var val = _.filter(genres, (g) => { return g[0] === genre });
                if (val.length === 0){
                    genres.push([genre, 1]);
                } else {
                    var index = _.indexOf(genres, val[0]);
                    genres[index][1] = genres[index][1] + 1
                }
            });
        });

        genres = _.orderBy(genres, (genre) => { return genre[1] }, 'desc').slice(0,this.props.limit);
        return genres.map((genre) =>
            <Col key={_.upperCase(genre[0])} xs='auto' style={{paddingBottom: '.5em', paddingLeft: 0}}>
                <div className='bg-genre'><NavbarBrand>{_.upperCase(genre[0])}</NavbarBrand></div>
            </Col>
        )

    }
    
    render() {
        if (!this.props.data){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Row className="d-flex justify-content-center">{this.getTopGenres()}</Row>
        );
    }
}
