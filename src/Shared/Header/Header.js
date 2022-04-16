import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.jpg";
import "./Header.css"

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar className="nav-background" variant="light" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="200"
            height="100"
            className="d-inline-block align-top"
            alt="Aurora Health"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" active>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" active>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" active>
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active>
              About Me
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            {user ? (
              <button
                className="btn btn-link text-decoration-none text-dark"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Nav.Link className="text-dark" as={Link} to="/login" active>
                Login
              </Nav.Link>
            )}
            <Nav.Link as={Link} className='text-dark' to="/register" active>
              Register
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
