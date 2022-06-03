import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />

      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-secondary text-lg">Booking for: {name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-2 justify-items-center mt-3"
          >
            <input
              type="text"
              name="date"
              disabled
              value={format(date, "PP")}
              class="input  input-bordered input-success w-full max-w-xs"
            />
            <select name="slot" class="select select-secondary w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              class="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Mobile Number"
              class="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="Submit"
              value="Submit"
              class="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
