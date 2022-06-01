import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import Chair from "../../assets/images/chair.png";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import Background from "../../assets/images/bg.png";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
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
          <p className="text-secondary px-5 pb-2">
            You have selected: {format(date, "PP")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
