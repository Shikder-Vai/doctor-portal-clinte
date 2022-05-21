import React from "react";
import Reviews from "./Reviews";
import quote from "../../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div className="text-primary mx-10 ">
      <div
        style={{ backgroundImage: `url(${quote})` }}
        className="my-12 bg-right-top bg-no-repeat bg-contain"
      >
        <h3>Testimonial</h3>
        <h1 className="text-5xl font-bold text-accent">
          What Our Patients Says
        </h1>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default Testimonial;
