import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">People's General Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-white text-uppercase">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#doctors">Doctors</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <NavDropdown title="Departments" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#departments/cardiology">Cardiology</NavDropdown.Item>
                                <NavDropdown.Item href="#departments/dental">Dental</NavDropdown.Item>
                                <NavDropdown.Item href="#departments/neurologist">Nuerologist</NavDropdown.Item>
                                <NavDropdown.Item href="#departments/pediatric">Pediatric</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;