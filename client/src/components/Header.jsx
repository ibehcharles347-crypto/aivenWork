import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {

    return (
        <Navbar
            expand="lg"
            bg="dark"
            variant="light"
            sticky="top"
            className="shadow-sm"
        >
            <Container>
                {/* Logo / Brand */}
                <Navbar.Brand as={NavLink} to="/admin" className="fw-bold text-light">
                    CharlesFX
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="text-light ms-auto gap-3 d-flex align-items-center justify-content-center">
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            className="text-light"
                            
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            className="text-light"
                            
                        >
                            Help?
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;