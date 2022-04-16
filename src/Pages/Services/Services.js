import React from "react";
import useServices from "../../hooks/useServices";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div className="container">
      <h2 className="service-title text-center mt-5">SERVICES</h2>
      <div className="row mt-3">
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
