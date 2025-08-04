import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigate() {
  return (
    
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='bg-purple-100 text-white'>
      <Container>
        <Navbar.Brand href="Home" className='hover:animate-bounce'>Ari Paul-Forton</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Videography">Videography</Nav.Link>
            <Nav.Link href="Photography">Photography</Nav.Link>
            <Nav.Link href="GraphicDesign">Graphic Design</Nav.Link>
            <Nav.Link href="AboutMe">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;