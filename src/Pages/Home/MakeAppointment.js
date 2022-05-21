import React from "react";
import DoctorSmall from "../../assets/images/doctor-small.png";
import Background from "../../assets/images/appointment.png";
import PrimaryButton from "../Share/PrimaryButton";

const MakeAppointment = () => {
  return (
    <div class=" min-h-screen my-20 ">
      <div
        class=" flex justify-center items-center bg-no-repeat w-full bg-bottom flex-col lg:flex-row space-x-10"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <img
          src={DoctorSmall}
          class="max-w-sm mt-[-100px] hidden lg:block rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <p className=" text-primary">Appointment</p>
          <h1 class="text-5xl font-bold text-white">
            Make an appointment Today
          </h1>
          <p class="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
