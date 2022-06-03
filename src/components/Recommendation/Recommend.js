import React, { Component } from 'react';
import { Container, Row, NavbarBrand, Col, ButtonGroup, Button } from 'reactstrap';
import  Cookies  from 'js-cookie'
import $ from 'jquery';
import _ from 'lodash';

export class Recommend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topTracks: null,
            topArtists: null,
            artists: [],
            tracks: [],
            genres: [],
        }
    }

    componentDidMount(){
        this.setState({topTracks: (this.loadTrackData()).responseJSON});
        this.setState({topArtists: (this.loadArtistData()).responseJSON});
    }

    componentDidUpdate(prevProps){
        if (prevProps.term !== this.props.term){
            this.setState({topTracks: (this.loadTrackData()).responseJSON});
            this.setState({topArtists: (this.loadArtistData()).responseJSON});
        }
    }

    loadArtistData() {
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/artists?time_range=' + this.props.term + '&limit=50',
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

    loadTrackData() {
        return $.ajax({
            url: 'https://api.spotify.com/v1/me/top/tracks?time_range=' + this.props.term + '&limit=50',
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

    artistsMultiSelectList() {
        return this.state.topArtists.items.map((artist) =>
            <Button color="primary" onClick={this.addArtist(artist.id)}>
                {artist.name}
            </Button>
        )
    }

    addArtist(artist) {
        if (this.state.artists.includes(artist)){
            this.setState({artists: this.state.artists.splice(this.state.artists.indexOf(artist), 1)})
        } else {
            this.setState({artists: this.state.artists.push(artist)})
        }
    }

    tracksMultiSelectList() {
        return this.state.topTracks.map((track) =>
            <Button color="primary" onClick={this.addTrack(track.id)}>
                {track.name}
            </Button>
        )
    }

    addTrack(track) {
        if (this.state.tracks.includes(track)){
            this.setState({tracks: this.state.tracks.splice(this.state.tracks.indexOf(track), 1)})
        } else {
            this.setState({tracks: this.state.tracks.push(track)})
        }
    }

    genresMultiSelectList() {
        var genres = []
        _.forEach(this.state.topArtists.items, (item) => {
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

        genres = _.orderBy(genres, (genre) => { return genre[1] }, 'desc');
        return genres.map((genre) =>
            <Button color="primary" onClick={this.addGenre(genre)}>
                {genre}
            </Button>
        )
    }

    addGenre(genre) {
        if (this.state.genres.includes(genre)){
            this.setState({genres: this.state.genres.splice(this.state.genres.indexOf(genre), 1)})
        } else {
            this.setState({genres: this.state.genres.push(genre)})
        }
    }
    
    render() {
        if (!this.state.topArtists || !this.state.topTracks){
            return (
                <div>Loading...</div>
            )
        }
        return (
            <Container>
                <Row style={{marginBottom: "1.5em", marginTop: "1.5em"}}>
                    <h3>ARTISTS<br/><div style={{fontSize: 'xx-small'}}>Select up to 5</div></h3>
                </Row>
                <Row>
                    <ButtonGroup>
                        {this.artistsMultiSelectList()}
                    </ButtonGroup>
                </Row>
                <Row style={{marginBottom: "1.5em", marginTop: "1.5em"}}>
                    <h3>TRACKS<br/><div style={{fontSize: 'xx-small'}}>Select up to 5</div></h3>
                </Row>
                <Row>
                    <ButtonGroup>
                        {this.tracksMultiSelectList()}    
                    </ButtonGroup>
                </Row>
                <Row style={{marginBottom: "1.5em", marginTop: "1.5em"}}>
                    <h3>GENRES<br/><div style={{fontSize: 'xx-small'}}>Select up to 5</div></h3>
                </Row>
                <Row>
                    <ButtonGroup>
                        {this.genresMultiSelectList()}  
                    </ButtonGroup>
                </Row>
            </Container>
            
        );
    }
}
