import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { TopTracks } from './components/Track/TopTracks';
import { TopArtists } from './components/Artist/TopArtists';
import { RecentlyPlayed } from './components/RecentlyPlayed/RecentlyPlayed';
import { Container, Row } from 'reactstrap';
import { SpotifyApiContext } from 'react-spotify-api'
import { SpotifyAuth } from 'react-spotify-auth'
import  Cookies  from 'js-cookie'
import 'react-spotify-auth/dist/index.css'
import './custom.css'


const App = () => {
    const [token, setToken] = React.useState(Cookies.get('spotifyAuthToken'));

    return (
            <div className='app'>
                {token ? (
                    <SpotifyApiContext.Provider value={token}>
                        <Layout>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/TopTracks' component={TopTracks} />
                            <Route exact path='/TopArtists' component={TopArtists} />
                            <Route exact path='/RecentlyPlayed' component={RecentlyPlayed} />
                        </Layout>
                    </SpotifyApiContext.Provider>
                ) : (
                    // Display the login page
                    <Layout>
                        <Container>
                            <Row className="justify-content-center" style={{marginTop: '3em'}}>
                                <SpotifyAuth
                                    redirectUri={document.location.origin}
                                        clientID='752407c80ece4143822dba70f3b8747e'
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