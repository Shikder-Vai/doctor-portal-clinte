import React from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Review></Review>
      <Review></Review>
      <Review></Review>
    </div>
  );
};

export default Reviews;
