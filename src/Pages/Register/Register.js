import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import("./Register.css");

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };

  if (user) {
      navigate('/')
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    createUserWithEmailAndPassword(name, email , password)
  };
  return (
    <div className="mt-3 container w-50 mx-auto">
      <h2 className="mb-3 text-success">Register Now</h2>
      <Form onSubmit={handleRegister}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type Your Name"
            type="text"
            name="name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type Your Email"
            type="email"
            name="email"
            aria-describedby="basic-addon1"
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type Your Password"
            type="password"
            name="password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <p className="mb-3">
          Already Registered?{" "}
          <Link
            to="/login"
            className="text-success text-decoration-none"
            onClick={navigateLogin}
          >
            Login
          </Link>
        </p>
        <input
          className="register-btn"
          type="submit"
          value="Register"
        />
      </Form>
    </div>
  );
};

export default Register;
