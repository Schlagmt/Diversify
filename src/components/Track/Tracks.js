import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Row, Col, Table, Spinner } from 'reactstrap';
import Cookies from 'js-cookie';
import { Emoji } from '../Shared/Emoji';

export class Tracks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topTracks: null
        }
    }

    componentDidMount(){
        this.setState({topTracks: (this.loadData()).responseJSON});
    }

    componentDidUpdate(prevProps){
        if (prevProps.term !== this.props.term){
            this.setState({topTracks: (this.loadData()).responseJSON});
        }
    }

    loadData(){
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

    displayTopNineTracks(){
        if (this.state.topTracks){
            var topNine = this.state.topTracks.items.slice(0,9)
            return topNine.map((track, index) =>
                <Col key={track.id} style={{padding: 0}}>
                    <div className='containerTrack'>
                        <img className="imageTrack" src={track.album.images[0].url} alt={track.name}></img>
                        <div className="overlayTrack">
                            {index + 1}. {track.name} <Emoji score={track.popularity}></Emoji>
                            <div style={{fontSize: 'xx-small'}}>{track.album.artists[0].name}</div>
                        </div>
                    </div>
                </Col>
            )
        }
        else{
            return null;
        }
    }

    displayRestTracks(){
        if (this.state.topTracks){
            var rest = this.state.topTracks.items.slice(9,50)
            return rest.map((track, index) =>
                <tr key={track.id}>
                    <th>
                        {index + 10}
                    </th>
                    <td>
                        <img className="imageTrack" src={track.album.images[2].url} alt={track.name} style={{maxHeight: '2em', maxWidth: '2em'}}></img>
                    </td>
                    <td>
                        {track.name}<div style={{fontSize: 'xx-small'}}>{track.album.artists[0].name}</div>
                    </td>
                    <td>
                        <Emoji score={track.popularity}></Emoji>
                    </td>
                </tr>
            )
        }
        else{
            return null;
        }
    }

    displayTable(){
        if (this.state.topTracks){
            var rest = this.state.topTracks.items.slice(9,50)
            if (rest !== [])
            return (
                <Row style={{marginBottom: "3em", marginTop: "3em"}}>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th style={{minWidth: '57px'}}>
                                    
                                </th>
                                <th>
                                    Track
                                </th>
                                <th>
                                    
                                </th>
                            </tr> 
                        </thead>
                        <tbody>
                            {this.displayRestTracks()}
                        </tbody>
                    </Table>
                </Row>
            )
        }
        else{
            return null;
        }
    }
    
    render() {
        if (!this.state.topTracks){
            return (
                <Spinner>
                    Loading...
                </Spinner>
            )
        }
        return (
            <Container>
                <Row md="3" xs="3">
                    {this.displayTopNineTracks()}
                </Row>
                {this.displayTable()}
            </Container>
        );
    }
}
