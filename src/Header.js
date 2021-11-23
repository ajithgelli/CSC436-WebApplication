import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Container, Nav, Navbar } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
              <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link> Todo List</Nav.Link>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/todo">Todo</Nav.Link>
                  <Nav.Link href="/user">Users</Nav.Link>
                  <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
    
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}
export default Header;