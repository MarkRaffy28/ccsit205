import React from 'react'
import Container from 'react-bootstrap-Container'
import Nav from 'react-bootstaro/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
  return (
    <Navbar expands="lg" variant="dark" bg="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="#link">Gallery</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 