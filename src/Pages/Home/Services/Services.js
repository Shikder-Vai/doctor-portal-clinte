import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div className=" grid grid-cols-1 gap-4 mx-10 md:grid-cols-2 lg:grid-cols-3">
      <ServiceCard
        img={fluoride}
        title={"Fluoride Treatment"}
        bodyText={
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
      ></ServiceCard>
      <ServiceCard
        img={cavity}
        title={"Cavity Filling"}
        bodyText={
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
      ></ServiceCard>
      <ServiceCard
        img={whitening}
        title={"Teeth Whitening"}
        bodyText={
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
      ></ServiceCard>
    </div>
  );
};

export default Services;
