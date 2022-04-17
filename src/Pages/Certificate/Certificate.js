import React from "react";
import { Card } from "react-bootstrap";
import "./Certificate.css";

const Certificate = ({ certificate }) => {
  const { img, description } = certificate;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Certificate;
