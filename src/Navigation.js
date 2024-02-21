import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
const Navigation = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className='container-fluid'>
            <Navbar.Brand href="#home">        
                <img alt="" src="./glamping.png" width="60" height="60"
                 className="d-inline-block align-top" />
            </Navbar.Brand>
    
            <Navbar.Toggle aria-controls="responsive-navbar-nav nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="me-auto">   
                </Nav> 
                <Nav>
                    <Nav.Link href="/home" className='fs-5 mx-3' aria-current="page">Home</Nav.Link>
                    <Nav.Link href="/accomodation" className='fs-5 mx-3'>Accomodation</Nav.Link>
                    <Nav.Link href="/site" className='fs-5 mx-3'>Site</Nav.Link>
                    <Nav.Link href="/about" className='fs-5 mx-3'>About</Nav.Link>
                    <Nav.Link href="/book" className='fs-5 mx-3'>Book</Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
 
export default Navigation;