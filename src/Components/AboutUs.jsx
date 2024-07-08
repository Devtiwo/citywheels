import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto margin mt-8">
        <div className="grid grid-cols-2">
          <div className="relative">
            <img src="/images/about3.png " alt="aboutimg" className="rounded-lg h-96 mx-auto" />
          </div>
          <div>
            <h2 className="text-2xl mb-3 font-semibold text-lime-700">About Us</h2>
            <p className="font-medium leading-loose">
              Since 2001, CityWheels has been immersed in the automobile
              industry, catering to our esteemed customers with unparalleled
              standards and exceptional services. Over the years, we have
              garnered widespread recognition, extending our services from
              individuals to private corperations. Our paramount focus is to
              meet every customer's needs, underscored by the highest quality
              vehicles, expertly trained staff and comprehensive after-rental
              support. Our diverse fleet comprises of vehicles from American,
              japanese and korean manufacturers, ranging from saloons to
              family-sized transports and buses. We prioritize flexibility in
              our dealings, emplyoing semaless systems to accomodate customer
              demands regarding rental durations. Whether it's for a day, a
              week, a month, or a year, CityWheels ensures a tailored rental
              experience to suit every requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
