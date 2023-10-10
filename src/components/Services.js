import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import bg from './background image.jpg'
// import img2 from './growing-your-money-1030x648.png'
import CustomSlider from "./slider/custom.slider";
// import {images2} from "../data/images";
import images2 from "../data/images2";

const Services = () => {
  return (
    <div>
      <div className="w-[96vw] py-1 flex items-center ml-4">
        <img className="w-[60px]" src="/images/udan logo new.png" />
        <label className="ml-4 font-bold text-[22px] text-yellow-700 ">
          Project UDAN
        </label>
      </div>
      <Navbar gradient="from-green-500 to-violet-600" />

      {/* carousel 1 */}
      <CustomSlider>
        {images2.map((image, index) => {
          return (
            <img
              style={{ height: "70vh" }}
              key={index}
              src={image.imgURL}
              alt={image.imgAlt}
            />
          );
        })}
      </CustomSlider>

      <div className="relative h-[800px]">
        <img
          className="absolute w-full h-[800px]"
          src="./images/background image.jpg"
        />
        <div className=" absolute z-20 top-14 left-0 right-0 mx-auto text-center w-[450px]  font-medium">
          <p className="text-[45px]">Services</p>
        </div>

        <div className="absolute z-20 top-36 left-0 right-0 m-auto flex flex-wrap justify-center ">
          <div className="animExpand w-[200px]  px-8 py-3 text-center bgtrans rounded-tl-3xl rounded-br-3xl ">
            <p className="text-[23px] mt-2 my-5 text-green-700 font-semibold underline">
              Good Quality sapling
            </p>
            <p className="text-[20px]">
              We provide excellent quality of sandalwood sapling for best
              growth. Our sapling are well settled in sunlight so that it will
              survive in sudden climatical changes.
            </p>
          </div>

          <div className="animExpand w-[200px] px-8 py-3 mx-8 text-center bgtrans rounded-tl-3xl rounded-br-3xl">
            <p className="text-[23px] mt-2 my-5 text-green-700 font-semibold underline">
              Provide knowledge
            </p>
            <p className="text-[20px]">
              We provide complete knowledge about how to take care of your plant
              so that it will grow properly. Its very important in order to work
              in commercial level.
            </p>
          </div>

          <div className="animExpand w-[200px] px-8 py-3  text-center bgtrans rounded-tl-3xl rounded-br-3xl">
            <p className="text-[23px] mt-2 my-5 text-green-700 font-semibold underline">
              Provide Platform to sell
            </p>
            <p className="text-[20px]">
              We insure that final product i.e. hardwood will be sold out at
              right market price depending on current market situation. Proper
              quality analysis will be performed at the time of maturity.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
