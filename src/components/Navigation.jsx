import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Navigation.css';

import react from '../assets/react.svg';
import burger from '../assets/burger.svg';""

function Navigation() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/home">
          <img src={react} alt="react" height="26" className="burger" /> {" "}
          <span className="fw-bold navbar-title">Mashu Personal Website</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content">
          <img src={burger} alt="burger" height="24" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-content">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="/home" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="/gallery" className="fw-bold">Gallery</Nav.Link>
            <Nav.Link href="/contact" className="fw-bold">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button variant="success">Search</Button>
          </Form> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
