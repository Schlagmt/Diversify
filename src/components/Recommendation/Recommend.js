import React, { Component } from 'react';
import { Container, Row, NavbarBrand, Col, ButtonGroup, Button } from 'reactstrap';
import  Cookies  from 'js-cookie'
import $ from 'jquery';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

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
            <Button className='recommend-buttons' outline key={artist.id} color="primary" onClick={() => this.addArtist(artist)}>
                {artist.name}
            </Button>
        )
    }

    artistsSelected() {
        if (this.state.artists.length > 0){
            return this.state.artists.map((artist) =>
                <Button className='recommend-buttons' outline key={artist.id} color="primary" onClick={() => this.addArtist(artist)}>
                    {artist.name} <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                </Button>
            )
        }
    }

    addArtist(artist) {
        var artists = this.state.artists
        if (artists.includes(artist)){
            artists.splice(artists.indexOf(artist), 1)
        } else {
            artists.push(artist)
        }
        this.setState({artists: artists})
    }

    tracksMultiSelectList() {
        return this.state.topTracks.items.map((track) =>
            <Button className='recommend-buttons' outline key={track.id} color="primary" onClick={() => this.addTrack(track)}>
                {track.name}
            </Button>
        )
    }

    tracksSelected() {
        if (this.state.tracks.length > 0){
            return this.state.tracks.map((track) =>
                <Button className='recommend-buttons' outline key={track.id} color="primary" onClick={() => this.addTrack(track)}>
                    {track.name} <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                </Button>
            )
        }
    }

    addTrack(track) {
        var tracks = this.state.tracks
        if (tracks.includes(track)){
            tracks.splice(tracks.indexOf(track), 1)
        } else {
            tracks.push(track)
        }
        this.setState({tracks: tracks})
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
            <Button className='recommend-buttons' outline key={genre[0]} color="primary" onClick={() => this.addGenre(genre[0])}>
                {genre[0]}
            </Button>
        )
    }

    genresSelected() {
        if (this.state.genres.length > 0){
            return this.state.genres.map((genre) =>
                <Button className='recommend-buttons' outline key={genre} color="primary" onClick={() => this.addGenre(genre)}>
                    {genre} <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                </Button>
            )
        }
    }

    addGenre(genre) {
        var genres = this.state.genres
        if (genres.includes(genre)){
            genres.splice(genres.indexOf(genre), 1)
        } else {
            genres.push(genre)
        }
        this.setState({genres: genres})
    }
    
    render() {
        if (!this.state.topArtists || !this.state.topTracks){
            return (
                <div>Loading...</div>
            )
        }
        return (
            <Container>
                <Row style={{marginBottom: ".5em", marginTop: "1.5em"}}>
                    <h3>ARTISTS<br/><div style={{fontSize: 'xx-small'}}>Select up to 5</div></h3>
                </Row>
                <Row style={{marginBottom: ".5em"}}>
                    <ButtonGroup className='recommend-button-group'>
                        {this.artistsSelected()}
                    </ButtonGroup>
                </Row>
                <Row>
                    <ButtonGroup className='recommend-button-group'>
                        {this.artistsMultiSelectList()}
                    </ButtonGroup>
                </Row>
                <Row style={{marginBottom: ".5em", marginTop: "1.5em"}}>
                    <h3>TRACKS<br/><div style={{fontSize: 'xx-small'}}>Select up to 5</div></h3>
                </Row>
                <Row style={{marginBottom: ".5em"}}>
                    <ButtonGroup className='recommend-button-group'>
                        {this.tracksSelected()}
                    </ButtonGroup>
                </Row>
                <Row>
                    <ButtonGroup  className='recommend-button-group'>
                        {this.tracksMultiSelectList()}    
                    </ButtonGroup>
                </Row>
                <Row style={{marginBottom: ".5em", marginTop: "1.5em"}}>
                    <h3>GENRES<br/><div style={{fontSize: 'xx-small'}}>Select up to 5</div></h3>
                </Row>
                <Row style={{marginBottom: ".5em"}}>
                    <ButtonGroup className='recommend-button-group'>
                        {this.genresSelected()}
                    </ButtonGroup>
                </Row>
                <Row>
                    <ButtonGroup  className='recommend-button-group'>
                        {this.genresMultiSelectList()}  
                    </ButtonGroup>
                </Row>
            </Container>
            
        );
    }
}
