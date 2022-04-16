import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const {serviceId} = useParams();
  return (
    <div>
      <h2>ALL DETAILS : {serviceId}</h2>
      <Link to='/cheakout'>
          <button className="btn btn-success">Proceed Booking</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
