import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
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

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
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
        <p className="m-3">
          New to Aurora Health?{" "}
          <Link
            to="/register"
            className="text-success text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <p className="m-3">
          Forget Password?{" "}
          <button
            className="btn btn-link text-success text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
        <button className="login-btn ms-3" type="submit">
          Submit
        </button>
        {errorElement}
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Login;
