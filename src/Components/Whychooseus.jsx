import React from 'react';
import "../App.css";
import { FiPhoneCall } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Whychooseus = () => {
  return (
    <section id="whychooseus" className="bg-lime-50 py-8 px-4">
        <h2 className="text-center text-3xl font-semibold my-8">Why choose us</h2>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className="hidden lg:flex mt-8">
                <img src="/images/why.png" alt="why choose us" className="h-96 rounded-br-full mx-auto"/>
            </div>
            <div className="p-5 mt-8">
                <div className="flex gap-8 mb-8">
                    <div className="p-2 h-14 border-2 border-lime-500 rounded-tr-2xl rounded-bl-2xl">
                    <FiPhoneCall className="text-center text-3xl text-lime-600"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium">Good Customer support</h3>
                        <p>Our customer support is available 24/7 to cater to your needs.</p>
                    </div>
                </div>
                <div className="flex gap-8 mb-4">
                    <div className="p-2 h-14 border-2 border-lime-500 rounded-tr-2xl rounded-bl-2xl">
                    <IoPricetagsOutline className="text-center text-3xl text-lime-600"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium">Best Price Guaranteed</h3>
                        <p>We have the best prices on our rentals. We also provide money back guarantee if the car doesn't meet your expectations.</p>
                    </div>
                </div>
                <div className="flex gap-8 mb-8">
                    <div className="p-2 h-14 border-2 border-lime-500 rounded-tr-2xl rounded-bl-2xl">
                    <MdOutlineHealthAndSafety className="text-center text-3xl text-lime-600"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium">Car Safety</h3>
                        <p>Our vehicles go through regular checks which guarantees the safety of customers while driving.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Whychooseus;