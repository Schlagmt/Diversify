import React, { Component } from 'react';
import $ from 'jquery';
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
        $.ajax({
            url: document.location.origin + '/UserTops/GetUserTopTracks',
            contentType: "application/json; charset=utf-8",
            type: "POST",
            body: JSON.stringify({
                accessToken: this.state.spotifyAuthToken
            }),
            success: function (data) {
                console.log(data)
            },
            error: function (error) {
                console.log(error);
            }
        })
    }
    
    render() {
        return (
            <p>Hello</p>
        );
    }
}
