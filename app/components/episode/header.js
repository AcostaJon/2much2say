// react component
import Link from 'next/link';
// image component
import Logo from './components/episode/images/logo';
// bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// My components
import Subscribe from '@/components/subscribe'

function Header() {
  return (
    // Navigation Bar
    <Navbar collapseOnSelect expand="md" className="bg-transparent p-0">
      <Container >
          {/* logo */}
            <Navbar.Brand href="/" className="text-white p-0" title='Return Home'><Logo /></Navbar.Brand>
          {/* nav links */}
            <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='flex-md-wrap justify-content-md-end '>
              <Nav className="me-md-0 me-lg-4">
                <Nav.Link as={Link} href="/">Home</Nav.Link>
                <Nav.Link as={Link} href="/about">About</Nav.Link>
                <Nav.Link as={Link} href="/episodes">Episodes</Nav.Link>
                <Nav.Link as={Link} href="/reviews">Reviews</Nav.Link>
                <Nav.Link as={Link} href="/contact-us">Contact Us</Nav.Link>
                <Subscribe />
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;