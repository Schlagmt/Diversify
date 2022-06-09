import React, { Component } from 'react';
import { Container, Row, ButtonGroup, Button } from 'reactstrap';
import { Tracks } from '../Shared/Tracks';
import  Cookies  from 'js-cookie'
import $ from 'jquery';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Emoji } from '../Shared/Emoji';

export class Recommend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recommendations: null,
            topTracks: null,
            topArtists: null,
            artists: [],
            tracks: [],
            genres: [],
        }
    }

    componentDidMount(){
        this.setState({topTracks: ((this.loadTrackData()).responseJSON).items.slice(0,20)});
        this.setState({topArtists: ((this.loadArtistData()).responseJSON).items.slice(0,20)});
    }

    componentDidUpdate(prevProps){
        if (prevProps.term !== this.props.term){
            this.setState({topTracks: ((this.loadTrackData()).responseJSON).items.slice(0,20)});
            this.setState({topArtists: ((this.loadArtistData()).responseJSON).items.slice(0,20)});
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
        return this.state.topArtists.map((artist) =>
            <Button className='recommend-buttons' outline key={artist.id} color="primary" onClick={() => this.addArtist(artist)}>
                {artist.name} <div style={{float: 'right'}}><Emoji score={artist.popularity}></Emoji></div>
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
        return this.state.topTracks.map((track) =>
            <Button className='recommend-buttons' outline key={track.id} color="primary" onClick={() => this.addTrack(track)}>
                {track.name} <div style={{float: 'right'}}><Emoji score={track.popularity}></Emoji></div>
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
        var genres = [];
        _.forEach(this.state.topArtists, (item) => {
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
        genres = genres.splice(0,20);
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

    recommendations() {

        var artists = []
        _.forEach(this.state.artists, (artist) => {artists.push(artist.id)});
        var tracks = []
        _.forEach(this.state.tracks, (track) => {tracks.push(track.id)});

        var results = null;
        $.ajax({
            url: 'https://api.spotify.com/v1/recommendations?seed_artists=' + artists.join(',') + '&seed_tracks=' + tracks.join(',') + '&seed_genre=' + this.state.genres.join(',') + '&limit=100',
            async: false,
            contentType: "application/json; charset=utf-8",
            type: "GET",
            headers: {
                "Authorization": "Bearer " + Cookies.get('spotifyAuthToken')
            },
            success: function (data) {
                results = data;
            },
            error: function (error) {
                console.log(error);
            }
        });
        
        this.setState({recommendations: results?.tracks})
    }
    
    render() {
        if (!this.state.topArtists || !this.state.topTracks){
            return (
                <div>Loading...</div>
            )
        }
        return (
            <Container>
                <Row style={{marginBottom: ".5em", marginTop: ".5em"}}>
                    <h3><div style={{fontSize: 'x-small'}}>Select a combination of 5 entities</div><br/>ARTISTS</h3>
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
                    <h3>TRACKS</h3>
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
                    <h3>GENRES</h3>
                </Row>
                <Row style={{marginBottom: ".5em"}}>
                    <ButtonGroup className='recommend-button-group'>
                        {this.genresSelected()}
                    </ButtonGroup>
                </Row>
                <Row style={{marginBottom: "1.5em"}}>
                    <ButtonGroup  className='recommend-button-group'>
                        {this.genresMultiSelectList()}  
                    </ButtonGroup>
                </Row>
                <Row style={{marginBottom: ".5em"}}>
                    <ButtonGroup  className='recommend-button-group'>
                        <Button className='recommend-buttons' outline key='recommed' color="primary" onClick={() => this.recommendations()}>
                            RECOMMED
                        </Button>
                    </ButtonGroup>
                </Row>
                <Row style={{marginBottom: ".5em", marginTop: "1.5em"}}>
                    <h3>RESULTS</h3>
                </Row>
                <Row  md="6" xs="2" style={{marginBottom: ".5em"}}>
                    <Tracks data={this.state.recommendations} limit={18}></Tracks>
                </Row>
            </Container>
            
        );
    }
}
