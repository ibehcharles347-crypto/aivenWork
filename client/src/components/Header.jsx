import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <Navbar
            expand="lg"
            bg="light"
            variant="dark"
            sticky="top"
            className="shadow-sm"
        >
            <Container>
                {/* Logo / Brand */}
                <Navbar.Brand as={NavLink} to="/admin" className="fw-bold text-dark">
                    CharlesFX
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="text-dark ms-auto gap-3 d-flex align-items-center justify-content-center">
                        <p className="text-dark">Welcome, Charles</p>
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-warning fw-semibold" : "help-link"
                            }
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