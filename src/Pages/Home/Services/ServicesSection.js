import React from "react";
import Services from "./Services";
import TreatmentCard from "./TreatmentCard";

const ServicesSection = () => {
  return (
    <div>
      <div className="my-5">
        <p className=" text-center text-primary">OUR SERVICES</p>
        <h1 className=" text-lg text-center text-accent">
          Services W e Provide
        </h1>
      </div>
      <Services></Services>
      <TreatmentCard></TreatmentCard>
    </div>
  );
};

export default ServicesSection;
