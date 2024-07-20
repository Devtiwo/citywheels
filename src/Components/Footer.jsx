import React from "react";
import "../App.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-8 pt-8 pb-2">
      <div className="container mx-auto mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/citywheellogo.png"
              alt="citywheels logo"
              className="h-24"
            />
            <p className="font-medium lg:w-3/4 ml-6">
              A brand that symbolizes the automobile industry's pleasure and
              enthusiasm. We have partners in each states to connect with you to
              assist in your trip in meetings, events, holidays or long trips.
            </p>
          </div>
          <div className="p-5 flex flex-col lg:flex-row gap-10 mt-5">
            <div>
              <h3 className="text-xl font-semibold mb-3">Contact</h3>
              <ul>
                <li className="flex gap-3 font-medium mb-3">
                  <FaLocationDot className="mt-0.5 text-lime-600" />
                  3915 NW 25th St. Miami, Florida USA
                </li>
                <li className="flex gap-3 font-medium mb-3">
                  <MdEmail className="mt-0.5 text-lime-600"/> info@citywheels.com
                </li>
                <li className="flex gap-3 font-medium mb-3">
                  <FaPhone className="mt-0.5 text-lime-600"/> 305-465-7089
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Useful links</h3>
              <ul>
                <li className="font-medium mb-3 hover:text-lime-500">
                  <Link to="/home">Home</Link>
                </li>
                <li className="font-medium mb-3 hover:text-lime-500">
                  <Link to="#howitworks">How it works</Link>
                </li>
                <li className="font-medium mb-3 hover:text-lime-500">
                  <Link to="#aboutus">About Us</Link>
                </li>
                <li className="font-medium mb-3 hover:text-lime-500">
                  <Link to="#whychooseus">Why choose Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center font-semibold py-1">
      <small>CityWheels &copy; 2024 - Adventure Awaits!</small>
      </div>
    </footer>
  );
};

export default Footer;
