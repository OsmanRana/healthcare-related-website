import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home"><img src="/logo.png" alt="log" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-bold text-uppercase">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/doctors#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                            <NavDropdown title="Departments" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/departments#departments/cardiology">Cardiology</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/departments#departments/dental">Dental</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/departments#departments/neurologist">Nuerologist</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/departments#departments/pediatric">Pediatric</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user.displayName && <p className="my-auto mx-3">{user.displayName}</p>
                            }
                            {
                                user.photoURL && <img style={{width:'35px', height:'35px'}} src={user.photoURL} alt ="User"/>
                            }
                            {
                                user.email || user.uid? <Button onClick={logOut} variant="danger" className="ms-3">Log Out</Button> :
                                    <Link to="/login"><Button variant="light">Log In</Button></Link>
                            }
                            {
                                !user.email || user.uid && <Link to="/register" ><Button className="ms-3" variant="primary">Register</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;