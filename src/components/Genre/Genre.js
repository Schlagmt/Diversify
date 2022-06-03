import React, { Component } from 'react';
import { Row, NavbarBrand } from 'reactstrap';
import $ from 'jquery';
import Cookies from 'js-cookie';
import _ from 'lodash';
import { Genres } from '../Shared/Genres';
import { Artists } from '../Shared/Artists';
import { Tracks } from '../Shared/Tracks';


export class Genre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genre: props.location.search.replace('?genre=','').replace('%20', ' '),
            genreData: null
        }
    }

    componentDidMount(){
        this.setState({genreData: (this.loadData()).responseJSON});
    }

    componentDidUpdate(prevProps){
        if (prevProps.location.search !== this.props.location.search){
            this.setState({genre: this.props.location.search.replace('?genre=','').replace('%20', ' ')});
            this.setState({genreData: (this.loadData()).responseJSON});
        }
    }

    loadData(){
        return $.ajax({
            url: 'https://api.spotify.com/v1/search?q=' + this.props.location.search.replace('?genre=','').replace('%20', ' ') + '&type=track%2Cartist&limit=50',
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
    
    render() {
        if (!this.state.genreData){
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <div>
                <Row style={{marginBottom: "1.5em", marginTop: "1.5em"}}>
                    <NavbarBrand><h1>{_.toUpper(this.state.genre)}</h1></NavbarBrand>
                </Row>
                <hr/>
                <Row style={{marginBottom: "1.5em", marginTop: "1.5em"}}>
                    <NavbarBrand><h3>ARTISTS</h3></NavbarBrand>
                </Row>
                <Row md="6" xs="2">
                    <Artists data={this.state.genreData.artists.items} limit={12}></Artists>
                </Row>
                <Row style={{marginBottom: "1.5em", marginTop: "1.5em"}}>
                    <NavbarBrand><h3>TRACKS</h3></NavbarBrand>
                </Row>
                <Row md="6" xs="2">
                    <Tracks data={this.state.genreData.tracks.items} limit={24}></Tracks>
                </Row>
                <Row style={{marginBottom: "1.5em", marginTop: "1.5em"}}>
                    <NavbarBrand><h3>SIMILAR GENRES</h3></NavbarBrand>
                </Row>
                <Genres data={this.state.genreData.artists.items} limit={100}></Genres>
            </div>
        );
    }
}
