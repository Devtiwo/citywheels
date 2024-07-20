import React from "react";
import { FaCar } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GiHouseKeys } from "react-icons/gi";

const Howitworks = () => {
  return (
    <section id="howitworks" className="pb-8">
      <article>
        <h2
          style={{ marginTop: 100 }}
          className="text-center text-3xl font-semibold mb-8"
        >
          How It Works
        </h2>
        <div className="flex flex-col lg:flex-row justify-evenly items-center margin">
        <div className="p-3 w-80 text-center">
          <div className="p-3 w-32 h-32 bg-lime-50 m-auto rounded-3xl my-9">
            <FaCar className="text-6xl text-lime-600 m-auto mt-6"/>
          </div>
          <h3 className="text-xl font-semibold mb-3">Select your Car</h3>
          <p className="font-medium">Pick from one of our numerous cars.</p>
        </div>
        <div className=" p-3 w-80 text-center">
          <div className="p-3 w-32 h-32 bg-lime-600 m-auto rounded-3xl my-9">
            <IoCalendarNumberOutline className="text-6xl text-lime-50 m-auto mt-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Pick Up Date</h3>
          <p className="font-medium">Select the date and time to pick up.</p>
        </div>
        <div className="p-3 w-80 text-center">
          <div className="p-3 w-32 h-32 bg-lime-50 m-auto rounded-3xl my-9">
            <GiHouseKeys className="text-6xl text-lime-600 m-auto mt-6"/>
          </div>
          <h3 className="text-xl font-semibold mb-3">Book your Car</h3>
          <p className="font-medium">Car will be delivered after booking.</p>
        </div>
        </div>
      </article>
    </section>
  );
};

export default Howitworks;
