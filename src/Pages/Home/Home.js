import React from "react";
import Banner from "./Banner";
import Info from "./Information/Info";
import ServicesSection from "./Services/ServicesSection";
import MakeAppointment from "./MakeAppointment";
import Testimonial from "./Testimonial/Testimonial";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <ServicesSection></ServicesSection>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
