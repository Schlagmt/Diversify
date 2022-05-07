import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar color="faded" className="border-bottom" light>
          <NavbarBrand tag={Link} to="/"><FontAwesomeIcon icon={faHouse} /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <HLink to="#RecentlyPlayed">Recently Played</HLink>
              </NavItem>
              <NavItem>
                <HLink to="#TopArtistsShortTerm">Top Artists Short Term</HLink>
              </NavItem>
              <NavItem>
                <HLink to="#TopArtistsMediumTerm">Top Artists Medium Term</HLink>
              </NavItem>
              <NavItem>
                <HLink to="#TopArtistsLongTerm">Top Artists Long Term</HLink>
              </NavItem>
              <NavItem>
                <HLink to="#TopTracksShortTerm">Top Tracks Short Term</HLink>
              </NavItem>
              <NavItem>
                <HLink to="#TopTracksMediumTerm">Top Tracks Medium Term</HLink>
              </NavItem>
              <NavItem>
                <HLink to="#TopTracksLongTerm">Top Tracks Long Term</HLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}