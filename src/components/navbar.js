import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../images/android-chrome-192x192.png';
import './navbar.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className='Nav'>
      <Container className='NavContainer'>
        <Navbar.Brand href="#home">
            <img src={brand} width="30px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          <Nav.Link href="#Continue">Continue Watching</Nav.Link>
            <Nav.Link href="#Release">Top Relases</Nav.Link>
            <Nav.Link href="#watchNow">Watch Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;