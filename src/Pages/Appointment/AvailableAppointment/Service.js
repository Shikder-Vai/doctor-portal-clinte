import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}!</h2>
        <p>
          <span>
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className=" text-red-600">try another dates</span>
            )}
          </span>
        </p>
        <p>
          <span>{slots.length} </span>
          <span>{slots.length > 1 ? "Spaces" : "Space"} </span>
          available
        </p>
        <div class="card-actions justify-center ">
          <button></button>
          <label
            disabled={slots.length === 0}
            class="btn btn-secondary text-white uppercase font-semibold modal-button"
            for="booking-modal"
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
