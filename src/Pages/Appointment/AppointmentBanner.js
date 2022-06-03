import React from "react";
import { DayPicker } from "react-day-picker";
import Chair from "../../assets/images/chair.png";
import "react-day-picker/dist/style.css";
import Background from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      class="hero min-h-screen bg-no-repeat	bg-left-bottom "
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          class="lg:max-w-md max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className=" lg:mr-5 rounded-lg shadow-2xl">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
