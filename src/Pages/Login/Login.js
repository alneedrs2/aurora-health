import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="m-3 text-success">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p className="m-3">
          New to this site?{" "}
          <Link
            to="/register"
            className="text-success text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <button className="login-btn ms-3" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Login;
