import React, { useState } from "react";
import Footer from "../Share/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date}></AvailableAppointment>
      <Footer />
    </div>
  );
};

export default Appointment;
