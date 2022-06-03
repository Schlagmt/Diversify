(this.webpackJsonpdiversify=this.webpackJsonpdiversify||[]).push([[0],{48:function(t,e,a){},49:function(t,e,a){"use strict";a.r(e);a(36);var s=a(2),r=a.n(s),n=a(30),c=a.n(n),i=a(20),o=a(35),l=a(9),j=a(4),u=a(5),h=a(6),d=a(7),m=a(51),p=a(22),b=a(50),O=a(52),y=a(12),x=a(11),f=a(0),g=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(j.a)(this,a),(s=e.call(this,t)).toggleNavbar=s.toggleNavbar.bind(Object(p.a)(s)),s.state={collapsed:!0},s}return Object(u.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return Object(f.jsx)("header",{children:Object(f.jsx)(b.a,{className:"border-bottom",light:!0,children:Object(f.jsx)(m.a,{className:"d-flex justify-content-center",children:Object(f.jsx)(O.a,{tag:i.b,to:"/",children:Object(f.jsx)(y.a,{icon:x.c})})})})})}}]),a}(s.Component);g.displayName=g.name;var v=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(j.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{}),Object(f.jsx)(m.a,{children:this.props.children})]})}}]),a}(s.Component);v.displayName=v.name;var k=a(54),T=a(15),A=a.n(T),N=a(53),S=a(13),D=a.n(S),C=a(21),_=a.n(C),B=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(j.a)(this,a),(s=e.call(this,t)).state={topArtists:null},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({topArtists:this.loadData().responseJSON})}},{key:"loadData",value:function(){return A.a.ajax({url:"https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50",async:!1,contentType:"application/json; charset=utf-8",type:"GET",headers:{Authorization:"Bearer "+D.a.get("spotifyAuthToken")},error:function(t){console.log(t)}})}},{key:"getTopGenres",value:function(){var t=[];return _.a.forEach(this.state.topArtists.items,(function(e){_.a.forEach(e.genres,(function(e){var a=_.a.filter(t,(function(t){return t[0]===e}));if(0===a.length)t.push([e,1]);else{var s=_.a.indexOf(t,a[0]);t[s][1]=t[s][1]+1}}))})),(t=_.a.orderBy(t,(function(t){return t[1]}),"desc").slice(0,10)).map((function(t){return Object(f.jsx)(N.a,{xs:"auto",style:{paddingBottom:".5em",paddingLeft:0},children:Object(f.jsx)("div",{className:"bg-genre",children:Object(f.jsx)(O.a,{children:_.a.upperCase(t[0])})})})}))}},{key:"render",value:function(){return this.state.topArtists?Object(f.jsx)(k.a,{children:this.getTopGenres()}):Object(f.jsx)("h1",{children:"Loading..."})}}]),a}(s.Component),L=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={userData:null},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({userData:this.loadData().responseJSON})}},{key:"loadData",value:function(){return A.a.ajax({url:"https://api.spotify.com/v1/me",async:!1,contentType:"application/json; charset=utf-8",type:"GET",headers:{Authorization:"Bearer "+D.a.get("spotifyAuthToken")},error:function(t){console.log(t)}})}},{key:"render",value:function(){return this.state.userData?Object(f.jsx)(m.a,{children:Object(f.jsxs)(k.a,{md:"2",sx:"1",style:{width:"100%"},children:[Object(f.jsx)(N.a,{md:"4",children:Object(f.jsx)("img",{src:this.state.userData.images[0].url,alt:"user",style:{borderRadius:"50%"}})}),Object(f.jsxs)(N.a,{md:"8",children:[Object(f.jsx)(k.a,{children:Object(f.jsx)(O.a,{children:Object(f.jsx)("h1",{children:this.state.userData.display_name})})}),Object(f.jsx)(B,{})]})]})}):Object(f.jsx)("h1",{children:"Loading..."})}}]),a}(s.Component),R=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={recentlyPlayed:null},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({recentlyPlayed:this.loadData().responseJSON})}},{key:"loadData",value:function(){return A.a.ajax({url:"https://api.spotify.com/v1/me/player/recently-played",async:!1,contentType:"application/json; charset=utf-8",type:"GET",headers:{Authorization:"Bearer "+D.a.get("spotifyAuthToken")},error:function(t){console.log(t)}})}},{key:"render",value:function(){return this.state.recentlyPlayed?Object(f.jsxs)(N.a,{children:[Object(f.jsx)("img",{className:"bg-image",src:this.state.recentlyPlayed.items[0].track.album.images[0].url,alt:this.state.recentlyPlayed.items[0].track.album.name,style:{maxHeight:"100%",maxWidth:"100%"}}),Object(f.jsx)("div",{className:"bg-text",children:Object(f.jsx)(O.a,{tag:i.b,to:"/RecentlyPlayed",children:Object(f.jsx)("h1",{children:"HISTORY"})})})]}):Object(f.jsx)("h1",{children:"Loading..."})}}]),a}(s.Component),w=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={topArtists:null},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({topArtists:this.loadData().responseJSON})}},{key:"loadData",value:function(){return A.a.ajax({url:"https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=1",async:!1,contentType:"application/json; charset=utf-8",type:"GET",headers:{Authorization:"Bearer "+D.a.get("spotifyAuthToken")},error:function(t){console.log(t)}})}},{key:"render",value:function(){return this.state.topArtists?Object(f.jsxs)(N.a,{children:[Object(f.jsx)("img",{className:"bg-image",src:this.state.topArtists.items[0].images[0].url,alt:this.state.topArtists.items[0].name,style:{maxHeight:"100%",maxWidth:"100%"}}),Object(f.jsx)("div",{className:"bg-text",children:Object(f.jsx)(O.a,{tag:i.b,to:"/TopArtists",children:Object(f.jsx)("h1",{children:"TOP ARTISTS"})})})]}):Object(f.jsx)("h1",{children:"Loading..."})}}]),a}(s.Component),z=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={topTracks:null},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({topTracks:this.loadData().responseJSON})}},{key:"loadData",value:function(){return A.a.ajax({url:"https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1",async:!1,contentType:"application/json; charset=utf-8",type:"GET",headers:{Authorization:"Bearer "+D.a.get("spotifyAuthToken")},error:function(t){console.log(t)}})}},{key:"render",value:function(){return this.state.topTracks?Object(f.jsxs)(N.a,{children:[Object(f.jsx)("img",{className:"bg-image",src:this.state.topTracks.items[0].album.images[0].url,alt:this.state.topTracks.items[0].album.name,style:{maxHeight:"100%",maxWidth:"100%"}}),Object(f.jsx)("div",{className:"bg-text",children:Object(f.jsx)(O.a,{tag:i.b,to:"/TopTracks",children:Object(f.jsx)("h1",{children:"TOP TRACKS"})})})]}):Object(f.jsx)("h1",{children:"Loading..."})}}]),a}(s.Component),I=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(j.a)(this,a),t=e.call(this),window.history.pushState("","",document.location.origin),t}return Object(u.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(m.a,{children:[Object(f.jsx)(k.a,{style:{marginBottom:"3em",marginTop:"3em"},children:Object(f.jsx)(L,{})}),Object(f.jsxs)(k.a,{md:"3",xs:"1",children:[Object(f.jsx)(w,{}),Object(f.jsx)(z,{}),Object(f.jsx)(R,{})]})]})}}]),a}(s.Component),J=a(56),M=a(57),E=a(55),G=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(j.a)(this,a),(s=e.call(this,t)).state={topTracks:null},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({topTracks:this.loadData().responseJSON})}},{key:"componentDidUpdate",value:function(t){t.term!==this.props.term&&this.setState({topTracks:this.loadData().responseJSON})}},{key:"loadData",value:function(){return A.a.ajax({url:"https://api.spotify.com/v1/me/top/tracks?time_range="+this.props.term+"&limit=50",async:!1,contentType:"application/json; charset=utf-8",type:"GET",headers:{Authorization:"Bearer "+D.a.get("spotifyAuthToken")},error:function(t){console.log(t)}})}},{key:"displayTopNineTracks",value:function(){var t=this;return this.state.topTracks?this.state.topTracks.items.slice(0,9).map((function(e,a){return Object(f.jsx)(N.a,{style:{padding:0},children:Object(f.jsxs)("div",{className:"containerTrack",children:[Object(f.jsx)("img",{className:"imageTrack",src:e.album.images[0].url,alt:e.name}),Object(f.jsxs)("div",{class:"overlayTrack",children:[a+1,". ",e.name," ",t.popularityImage(e.popularity),Object(f.jsx)("div",{style:{fontSize:"xx-small"},children:e.album.artists[0].name})]})]})},e.id)})):null}},{key:"displayRestTracks",value:function(){var t=this;return this.state.topTracks?this.state.topTracks.items.slice(9,50).map((function(e,a){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:a+10}),Object(f.jsx)("td",{children:Object(f.jsx)("img",{className:"imageTrack",src:e.album.images[2].url,alt:e.name,style:{maxHeight:"2em",maxWidth:"2em"}})}),Object(f.jsxs)("td",{children:[e.name,Object(f.jsx)("div",{style:{fontSize:"xx-small"},children:e.album.artists[0].name})]}),Object(f.jsx)("td",{children:t.popularityImage(e.popularity)})]})})):null}},{key:"popularityImage",value:function(t){return t>=90?Object(f.jsx)(y.a,{icon:x.b,style:{color:"red"}}):t>=80?Object(f.jsx)(y.a,{icon:x.b,style:{color:"orange"}}):t>=70?Object(f.jsx)(y.a,{icon:x.b,style:{color:"yellow"}}):t>=60?Object(f.jsx)(y.a,{icon:x.a,style:{color:"lightblue"}}):Object(f.jsx)(y.a,{icon:x.d,style:{color:"blue"}})}},{key:"render",value:function(){return this.state.topTracks?Object(f.jsxs)(m.a,{children:[Object(f.jsx)(k.a,{md:"3",xs:"3",children:this.displayTopNineTracks()}),Object(f.jsx)(k.a,{style:{marginBottom:"3em",marginTop:"3em"},children:Object(f.jsxs)(E.a,{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{style:{minWidth:"57px"}}),Object(f.jsx)("th",{children:"Track"}),Object(f.jsx)("th",{})]}),this.displayRestTracks()]})})]}):Object(f.jsx)("h1",{children:"Loading..."})}}]),a}(s.Component),P=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={term:"short_term"},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return Object(f.jsxs)(m.a,{children:[Object(f.jsx)(k.a,{style:{marginBottom:"2em",marginTop:"2em"},children:Object(f.jsx)(N.a,{children:Object(f.jsxs)(J.a,{style:{width:"100%"},children:[Object(f.jsx)(M.a,{color:"primary",onClick:function(){return t.setState({term:"short_term"})},children:"Last Month"}),Object(f.jsx)(M.a,{color:"primary",onClick:function(){return t.setState({term:"medium_term"})},children:"Last 6 Months"}),Object(f.jsx)(M.a,{color:"primary",onClick:function(){return t.setState({term:"long_term"})},children:"All Time"})]})})}),Object(f.jsx)(G,{term:this.state.term})]})}}]),a}(s.Component),W=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(j.a)(this,a),(s=e.call(this,t)).state={topArtists:null},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({topArtists:this.loadData().responseJSON})}},{key:"componentDidUpdate",value:function(t){t.term!==this.props.term&&this.setState({topArtists:this.loadData().responseJSON})}},{key:"loadData",value:function(){return A.a.ajax({url:"https://api.spotify.com/v1/me/top/artists?time_range="+this.props.term+"&limit=50",async:!1,contentType:"application/json; charset=utf-8",type:"GET",headers:{Authorization:"Bearer "+D.a.get("spotifyAuthToken")},error:function(t){console.log(t)}})}},{key:"displayTopNineArtists",value:function(){var t=this;return this.state.topArtists?this.state.topArtists.items.slice(0,9).map((function(e,a){return Object(f.jsx)(N.a,{style:{padding:0},children:Object(f.jsxs)("div",{className:"containerTrack",children:[Object(f.jsx)("img",{className:"imageTrack",src:e.images[0].url,alt:e.name,style:{aspectRatio:"1"}}),Object(f.jsxs)("div",{class:"overlayTrack",children:[a+1,". ",e.name," ",t.popularityImage(e.popularity)]})]})},e.id)})):null}},{key:"displayRestArtists",value:function(){var t=this;return this.state.topArtists?this.state.topArtists.items.slice(9,50).map((function(e,a){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:a+10}),Object(f.jsx)("td",{children:Object(f.jsx)("img",{className:"imageTrack",src:e.images[2].url,alt:e.name,style:{maxHeight:"2em",maxWidth:"2em"}})}),Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:t.popularityImage(e.popularity)})]})})):null}},{key:"popularityImage",value:function(t){return t>=90?Object(f.jsx)(y.a,{icon:x.b,style:{color:"red"}}):t>=80?Object(f.jsx)(y.a,{icon:x.b,style:{color:"orange"}}):t>=70?Object(f.jsx)(y.a,{icon:x.b,style:{color:"yellow"}}):t>=60?Object(f.jsx)(y.a,{icon:x.a,style:{color:"lightblue"}}):Object(f.jsx)(y.a,{icon:x.d,style:{color:"blue"}})}},{key:"render",value:function(){return this.state.topArtists?Object(f.jsxs)(m.a,{children:[Object(f.jsx)(k.a,{md:"3",xs:"3",children:this.displayTopNineArtists()}),Object(f.jsx)(k.a,{style:{marginBottom:"3em",marginTop:"3em"},children:Object(f.jsxs)(E.a,{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{style:{minWidth:"57px"}}),Object(f.jsx)("th",{children:"Artist"}),Object(f.jsx)("th",{})]}),this.displayRestArtists()]})})]}):Object(f.jsx)("h1",{children:"Loading..."})}}]),a}(s.Component),H=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={term:"short_term"},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return Object(f.jsxs)(m.a,{children:[Object(f.jsx)(k.a,{style:{marginBottom:"2em",marginTop:"2em"},children:Object(f.jsx)(N.a,{children:Object(f.jsxs)(J.a,{style:{width:"100%"},children:[Object(f.jsx)(M.a,{color:"primary",onClick:function(){return t.setState({term:"short_term"})},children:"Last Month"}),Object(f.jsx)(M.a,{color:"primary",onClick:function(){return t.setState({term:"medium_term"})},children:"Last 6 Months"}),Object(f.jsx)(M.a,{color:"primary",onClick:function(){return t.setState({term:"long_term"})},children:"All Time"})]})})}),Object(f.jsx)(W,{term:this.state.term})]})}}]),a}(s.Component),U=a(33),K=a.n(U),Y=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(j.a)(this,a),(s=e.call(this,t)).state={recentTracks:null},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({recentTracks:this.loadData().responseJSON})}},{key:"loadData",value:function(){return A.a.ajax({url:"https://api.spotify.com/v1/me/player/recently-played?limit=50",async:!1,contentType:"application/json; charset=utf-8",type:"GET",headers:{Authorization:"Bearer "+D.a.get("spotifyAuthToken")},error:function(t){console.log(t)}})}},{key:"displayRecentTracks",value:function(){var t=this;return this.state.recentTracks?this.state.recentTracks.items.map((function(e,a){return Object(f.jsx)(N.a,{style:{padding:0},children:Object(f.jsxs)("div",{className:"containerTrack",children:[Object(f.jsx)("img",{className:"imageTrack",src:e.track.album.images[0].url,alt:e.track.name}),Object(f.jsxs)("div",{class:"overlayTrack",children:[a+1,". ",e.track.name," ",t.popularityImage(e.track.popularity),Object(f.jsx)("div",{style:{fontSize:"xx-small"},children:e.track.album.artists[0].name}),Object(f.jsx)("div",{style:{fontSize:"xx-small"},children:Object(f.jsx)(K.a,{children:e.played_at})})]})]})},e.id)})):null}},{key:"popularityImage",value:function(t){return t>=90?Object(f.jsx)(y.a,{icon:x.b,style:{color:"red"}}):t>=80?Object(f.jsx)(y.a,{icon:x.b,style:{color:"orange"}}):t>=70?Object(f.jsx)(y.a,{icon:x.b,style:{color:"yellow"}}):t>=60?Object(f.jsx)(y.a,{icon:x.a,style:{color:"lightblue"}}):Object(f.jsx)(y.a,{icon:x.d,style:{color:"blue"}})}},{key:"render",value:function(){return this.state.recentTracks?Object(f.jsx)(m.a,{children:Object(f.jsx)(k.a,{md:"3",xs:"3",children:this.displayRecentTracks()})}):Object(f.jsx)("h1",{children:"Loading..."})}}]),a}(s.Component),q=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(j.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(f.jsx)(m.a,{style:{marginBottom:"2em",marginTop:"2em"},children:Object(f.jsx)(Y,{})})}}]),a}(s.Component),F=a(34),Q=(a(47),a(48),function(){var t=r.a.useState(D.a.get("spotifyAuthToken")),e=Object(o.a)(t,2),a=e[0],s=e[1];return Object(f.jsx)("div",{className:"app",children:a?Object(f.jsxs)(v,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(f.jsx)(l.a,{exact:!0,path:"/TopTracks",component:P}),Object(f.jsx)(l.a,{exact:!0,path:"/TopArtists",component:H}),Object(f.jsx)(l.a,{exact:!0,path:"/RecentlyPlayed",component:q})]}):Object(f.jsx)(v,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)(k.a,{className:"justify-content-center",style:{marginTop:"3em"},children:Object(f.jsx)(F.a,{redirectUri:document.location.origin,clientID:"752407c80ece4143822dba70f3b8747e",scopes:["user-modify-playback-state","user-follow-modify","user-read-recently-played","user-read-playback-state","user-top-read","playlist-modify-public","user-library-modify","user-follow-read","user-read-currently-playing","user-library-read","playlist-read-private","user-read-private","playlist-modify-private"],onAccessToken:function(t){return s(t)}})})})})})}),V=document.getElementById("root");c.a.render(Object(f.jsx)(i.a,{basename:"/Diversify",children:Object(f.jsx)(Q,{})}),V)}},[[49,1,2]]]);
//# sourceMappingURL=main.b7120c23.chunk.js.map