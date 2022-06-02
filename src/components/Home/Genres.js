import React, { Component } from 'react';
import $ from 'jquery';
import { Row, Col, NavbarBrand } from 'reactstrap';
import Cookies from 'js-cookie';
import _ from 'lodash';

export class Genres extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topArtists: null
        }
    }

    componentDidMount(){
        this.setState({topArtists: (this.loadData()).responseJSON});
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50',
            async: false,
            contentType: "application/json; charset=utf-8",
            type: "GET",
            headers: {
                "Authorization": "Bearer " + Cookies.get('spotifyAuthToken')
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    getTopGenres () {

        var genres = []
        _.forEach(this.state.topArtists.items, (item) => {
            _.forEach(item.genres, (genre) => {
                var val = _.filter(genres, (g) => { return g[0] == genre });
                if (val.length == 0){
                    genres.push([genre, 1]);
                } else {
                    var index = _.indexOf(genres, val[0]);
                    genres[index][1] = genres[index][1] + 1
                }
            });
        });

        genres = _.orderBy(genres, (genre) => { return genre[1] }, 'desc').slice(0,10);
        return genres.map((genre) =>
            <Col xs='auto' style={{paddingBottom: '.5em', paddingLeft: 0}}>
                <div className='bg-genre'><NavbarBrand>{_.upperCase(genre[0])}</NavbarBrand></div>
            </Col>
        )

    }
    
    render() {
        if (!this.state.topArtists){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <Row>{this.getTopGenres()}</Row>
        );
    }
}
