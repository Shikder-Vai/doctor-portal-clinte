import React from "react";
import Review from "./Review";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      reviews:
        "Best of all: they're built to last, no matter how many times you jam a cable down an iron pipe or drag a reel out of a truck.",
      img: "https://i.ibb.co/C6554nF/people2.png",
      user_name: "Winson Herry",
      country: "California",
    },
    {
      _id: 2,
      reviews:
        "Best of all: they're built to last, no matter how many times you jam a cable down an iron pipe or drag a reel out of a truck.",
      img: "https://i.ibb.co/SxBv34H/people1.png",
      user_name: "Winson Herry",
      country: "California",
    },
    {
      _id: 3,
      reviews:
        "Best of all: they're built to last, no matter how many times you jam a cable down an iron pipe or drag a reel out of a truck.",
      img: "https://i.ibb.co/C6554nF/people2.png",
      user_name: "Winson Herry",
      country: "California",
    },
  ];
  return (
    <div className="grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
