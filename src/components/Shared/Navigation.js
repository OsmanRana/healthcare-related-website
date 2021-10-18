import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src="/logo.png" alt="log"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-bold text-uppercase">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/doctors#doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/services#services">Services</Nav.Link>
                            <NavDropdown title="Departments" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/departments#departments/cardiology">Cardiology</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/departments#departments/dental">Dental</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/departments#departments/neurologist">Nuerologist</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/departments#departments/pediatric">Pediatric</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to="/login"><Button variant="light">Log In</Button><Button to="/register" variant="primary">Register</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;