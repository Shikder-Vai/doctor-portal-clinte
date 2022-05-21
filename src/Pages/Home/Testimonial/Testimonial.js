import React from "react";
import Reviews from "./Reviews";

const Testimonial = () => {
  return (
    <div className="text-primary mx-10">
      <div className="my-12">
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
