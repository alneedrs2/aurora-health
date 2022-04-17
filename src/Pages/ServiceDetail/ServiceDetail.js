import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const {serviceId} = useParams();
  return (
    <div className="text-center">
      <h2>Service Number : {serviceId}</h2>
      <h4>Do you want to book this service?</h4>
      <Link to='/cheakout'>
          <button className="btn btn-success">Confirm Booking</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
