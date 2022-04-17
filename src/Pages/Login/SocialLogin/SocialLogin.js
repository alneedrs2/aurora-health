import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import {useSignInWithGithub, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
    
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
      errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-success w-50"></div>
        <div className="mt-2 px-2">
          <p>Or</p>
        </div>
        <div style={{ height: "1px" }} className="bg-success w-50"></div>
      </div>
      {errorElement}
      <div>
        <button onClick={() => signInWithGoogle()} className="btn btn-success w-50 d-block mx-auto my-2">
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button onClick={() => signInWithGithub()} className="btn btn-success w-50 d-block mx-auto">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
