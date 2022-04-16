import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-danger text-center">404</h1>
      <h3>Opps! Page Not Found.</h3>
      <NavLink to="/">
          <h5 className="text-success">Go to Home</h5>
      </NavLink>
    </div>
  );
};

export default NotFound;
