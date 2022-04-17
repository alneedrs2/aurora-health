import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import("./Register.css");

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading></Loading>
}

  if (user) {
    navigate("/");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate('/home');
}
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
            required
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
            required
          />
        </InputGroup>
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Aurora Health Terms and Conditions</label><br />
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-success mt-2'
                    type="submit"
                    value="Register" />
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
        <input className="register-btn" type="submit" value="Register" />
      </Form>
    </div>
  );
};

export default Register;
