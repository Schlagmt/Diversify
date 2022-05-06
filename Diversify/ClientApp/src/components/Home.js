import React, { Component } from 'react';
import Cookies from 'js-cookie'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            spotifyAuthToken: Cookies.get('spotifyAuthToken')
        }
        window.history.pushState("", "", document.location.origin);
    }

    async componentDidMount() {
        const userTopTracks = await fetch(document.location.origin + '/UserTops/GetUserTopTracks?accessToken=' + this.state.spotifyAuthToken)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    
    render() {
        return (
            <p>Hello</p>
        );
    }
}
