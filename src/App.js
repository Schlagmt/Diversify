import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { TopTracks } from './components/Track/TopTracks';
import { TopArtists } from './components/Artist/TopArtists';
import { RecentlyPlayed } from './components/RecentlyPlayed/RecentlyPlayed';
import { Recommendation } from './components/Recommendation/Recommendation';
import { Genre } from './components/Genre/Genre';
import { Container, Row } from 'reactstrap';
import { SpotifyAuth } from 'react-spotify-auth'
import  Cookies  from 'js-cookie'
import $ from 'jquery';
import 'react-spotify-auth/dist/index.css'
import './custom.css'


const App = () => {
    const [token, setToken] = React.useState(Cookies.get('spotifyAuthToken'));

    var tokenValid = true;
    $.ajax({
        url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1',
        async: false,
        contentType: "application/json; charset=utf-8",
        type: "GET",
        headers: {
            "Authorization": "Bearer " + token
        },
        error: function (error) {
            tokenValid = false
        }
    })

    return (
            <div className='app'>
                {tokenValid ? (
                    <Layout>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/TopTracks' component={TopTracks} />
                        <Route exact path='/TopArtists' component={TopArtists} />
                        <Route exact path='/RecentlyPlayed' component={RecentlyPlayed} />
                        <Route exact path='/Genre' component={Genre} />
                        <Route exact path='/Recommendation' component={Recommendation} />
                    </Layout>
                ) : (
                    // Display the login page
                    <Layout>
                        <Container>
                            <Row className="justify-content-center" style={{marginTop: '3em'}}>
                                <SpotifyAuth
                                    redirectUri={document.location.origin + document.location.pathname}
                                        /*clientID='752407c80ece4143822dba70f3b8747e' /*Development*/
                                        clientID='e8f25d7d2c6b4458b7509bd675e27043' /*Production*/
                                        scopes={['user-modify-playback-state',
                                            'user-follow-modify',
                                            'user-read-recently-played',
                                            'user-read-playback-state',
                                            'user-top-read',
                                            'playlist-modify-public',
                                            'user-library-modify',
                                            'user-follow-read',
                                            'user-read-currently-playing',
                                            'user-library-read',
                                            'playlist-read-private',
                                            'user-read-private',
                                            'playlist-modify-private']}
                                    onAccessToken={(token) => setToken(token)}
                                    />
                            </Row>
                        </Container>
                    </Layout>
                )}

            </div>
        );
}

export default App