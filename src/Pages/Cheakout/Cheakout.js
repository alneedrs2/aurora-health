import React from "react";
import { useParams } from "react-router-dom";

const Cheakout = () => {
    const {id} = useParams()
  return (
    <div>
      <h2>Please cheakout your booking.{id}</h2>
    </div>
  );
};

export default Cheakout;
