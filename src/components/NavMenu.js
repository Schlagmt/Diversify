import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        <Navbar light>
          <Container className="d-flex justify-content-center">
            <NavbarBrand tag={Link} to="/"><FontAwesomeIcon icon={faHouse} style={{color: 'white'}} /></NavbarBrand>
          </Container>
        </Navbar>
      </header>
    );
  }
}