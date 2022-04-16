import React from "react";
import {Card } from "react-bootstrap";
import './SingleService.css'

const SingleService = ({ service }) => {
  const { name, img, description, price, expire } = service;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title className="card-title">{name}</Card.Title>
           <h2 className="price-expire">${price}</h2>
           <p className="price-expire">{expire}</p>
          <Card.Text>
            {description}
          </Card.Text>
          <button className="service-btn">Book Now</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
