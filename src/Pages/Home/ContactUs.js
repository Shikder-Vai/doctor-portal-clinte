import React from "react";
import bgImage from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-no-repeat bg-cover bg-center mt-5 p-5"
    >
      <div className=" flex flex-col justify-center items-center my-5">
        <h3 className="text-primary font-bold">Contact Us</h3>
        <h1 className="text-white text-2xl">Stay connected with us</h1>
      </div>
      <form className=" flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Email Address"
          class="input mt-3 input-bordered input-md w-full max-w-xs inline-block"
        />
        <input
          type="text"
          placeholder="Subject"
          class="input mt-3 input-bordered input-md w-full max-w-xs"
        />
        {/* <!-- lg --> */}
        <textarea
          name="massege"
          placeholder="Your message"
          id=""
          cols="37"
          rows="5"
          className="border-2 mt-3 p-4 rounded-lg border-solid border-accent"
        ></textarea>
      </form>
    </div>
  );
};

export default ContactUs;
