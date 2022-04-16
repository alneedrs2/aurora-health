import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="">
              Link
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active>
              About
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            {user ? (
              <button className="btn btn-link text-decoration-none" onClick={handleSignOut}>Sign Out</button>
            ) : (
              <Nav.Link as={Link} to="/login" active>
                Login
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/register" active>
              Register
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
