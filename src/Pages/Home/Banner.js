import React from "react";
import BannerImg from "../../assets/images/chair.png";
import Background from "../../assets/images/bg.png";
import PrimaryButton from "../Share/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      class="hero min-h-screen bg-no-repeat	bg-left-bottom "
    >
      <div class="hero-content flex-col p-4 mx-10 lg:flex-row-reverse">
        <img src={BannerImg} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
