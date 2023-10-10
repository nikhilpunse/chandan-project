import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="py-1 flex items-center ml-4">
        <img className="w-[60px]" src="/images/udan logo new.png" />
        <label className="ml-4 font-bold text-[22px] text-yellow-700 ">
          Project UDAN
        </label>
      </div>
      <Navbar />
      <div className="mx-[250px] text-center p-12">
        <text className="text-[36px] font-semibold ">Our Mission</text>
        <p className="text-[22px]">
          Udan enterprieces mainly focus on empouring people <br /> who have
          strong desire to achieve prosperity in there life. Because of lack of
          knowledge and platform, most of todays new generation facing many
          difficulty to fulfill there goal, Udan enterprieces taken little
          forward step to resolve some of youth issue by helping them through
          new way. Currently, Udan Enterprices focus providing service for
          sandalwood farming. besides this, we are launching new service whose
          information will be available on this very soon. we hope, you might be
          satisfied with our services.{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
