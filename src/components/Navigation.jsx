import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import meta from '../assets/meta.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import envelope from '../assets/envelope.svg'

function Navigation() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#8f8b8bff' }}>
      <Container >
        <Navbar.Brand href="/" style={{color: 'white'}}>
        <img src = {meta} alt='react-logo' style={{ marginRight: '10px'}}/>
        React-Bootstrap</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'white', filter: 'brightness(0) invert(1)'}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{color: 'white'}}>
          <Nav className="me-auto" >
            <Nav.Link href="/home" style={{color: 'white', textAlign: 'center'}}>Home</Nav.Link>
            <Nav.Link href="/gallery" style={{color: 'white', textAlign: 'center'}}>Gallery</Nav.Link>
            <Nav.Link href="/contact" style={{color: 'white', textAlign: 'center'}}>Contact</Nav.Link>
          </Nav>
          <Nav style={{gap: '0.5rem', alignItems: 'center'}}>
            <a href="https://facebook.com/kathewinnn">
            <img src= {facebook} alt='facebook' style={{cursor: 'pointer'}}/>
            </a>
            <a href="https://instagram.com/fwairy.kth">
            <img src= {instagram} alt='instagram' style={{cursor: 'pointer'}}/>
            </a>
            <a href="mailto: itsmemae45@gmail.com">
            <img src= {envelope} alt='email' style={{cursor: 'pointer'}}/>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;