import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { Home } from "lucide-react";

const Header2 = () => {

    return (
        <Navbar expand="lg" sticky="top" className="charlie-navbar py-2">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="charlie-brand">
                    Charlie<span className="brand-accent">Fx</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="charlie-nav" className="border-0" />

                <Navbar.Collapse id="charlie-nav">
                    <Nav className="mx-auto gap-lg-3">
                        <Nav.Link as={NavLink} to="/" className="nav-link-custom">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/offers" className="nav-link-custom">
                            Offers
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/help" className="nav-link-custom">
                            Help?
                        </Nav.Link>
                    </Nav>
                    <div className="d-flex gap-2 mt-2 mt-lg-0">
                        <Nav.Link as={NavLink} to="/login" className="nav-link-custom">
                            Login
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/register" className="nav-link-custom">
                            Register
                        </Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header2;