import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReactPlayer from "react-player";

// import mainbg from './images/growing-your-money-1030x648.png'
import images from "../data/images";
import CustomSlider from "./slider/custom.slider";
import "./slider/styles.css";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 5000);
  }, []);

  return (
    <div>
      <div className=" py-1 flex items-center ml-4">
        <img className="w-[60px]" src="/images/udan logo new.png" />
        <label className="ml-4 font-bold text-[22px] text-yellow-700 ">
          Project UDAN
        </label>
      </div>
      <Navbar />

      <CustomSlider>
        {images.map((image, index) => {
          return (
            <img
              style={{ height: "300px" }}
              key={index}
              src={image.imgURL}
              alt={image.imgAlt}
            />
          );
        })}
      </CustomSlider>

      {/* Offers */}
      <div className="w-full font-semibold bg-blue-200 text-[18px] flex">
        <div>
          <img className="w-[100px]" src="/images/limited offer.png" />
        </div>
        <marquee className="pt-1">
          Offers Get upto 30% discount on limited time period. To get the offer
          click <span className="cursor-pointer underline"> Here</span>
        </marquee>
      </div>

      {/* info section */}
      <section className="flex flex-wrap flex-col justify-evenly p-3 my-12 home_res_container">
        <div className="min-w-[200px] rounded-lg border shadow-2xl overflow-hidden mx-2 my-6 home_res_card">
          <p className="text-[22px] p-3 text-white bg-gradient-to-r from-green-500 to-blue-600 text-center rounded-t-md">
            <i className="bi bi-exclamation-circle"></i> Our Vision
          </p>
          <p className="p-3 text-[18px]">
            Our vision is so clear. we want to create family of people who have
            spirit to achieve financial freedom through the 'Chandan Farming'.
          </p>
        </div>

        <div className="min-w-[200px] rounded-lg border shadow-2xl overflow-hidden mx-2 my-6 pb-28 home_res_card">
          <p className="text-[22px] p-3 text-white bg-gradient-to-r from-green-500 to-blue-600 text-center rounded-t-md">
            <i className="bi bi-gear-wide-connected"></i> Our Services
          </p>
          <p className="p-3 text-[18px]">Spreading Awareness</p>
          <hr />
          <p className="p-2 pl-3 text-[18px] cursor-pointer">
            Providing sapling
          </p>
          <hr />
          <p className="p-2 pl-3 text-[18px] cursor-pointer">
            Helps to sell
          </p>{" "}
          <hr />
          <p className="p-3 pl-3 text-[18px] cursor-pointer bg-yellow-200">
            Collaboration program
            <span className="animate-pulse text-red-500 ml-5 text-[16px]">
              New
            </span>
          </p>
          <hr />
        </div>

        <div className="min-w-[200px] rounded-lg border shadow-2xl overflow-hidden mx-2 my-6 home_res_card">
          <p className="text-[22px] p-3 text-white bg-gradient-to-r from-green-500 to-blue-600 text-center rounded-t-md">
            <i className="bi bi-pencil-square"></i> Download
          </p>

          <p className="p-3 text-[18px]">
            information PDF
          </p>
          <a href="https://forms.gle/MSNNxrFuDXEGSqNY9">
            <button className="m-2 px-3 py-1 bg-gradient-to-b from-slate-300 to-slate-600 rounded-md  animate-pulse text-white">
              Click Here
            </button>
          </a>
        </div>

        <div className="min-w-[200px] rounded-lg border shadow-2xl overflow-hidden mx-2 my-6 home_res_card">
          <p className="text-[22px] p-3 text-white bg-gradient-to-r from-green-500 to-blue-600 text-center rounded-t-md">
            <i className="bi bi-pencil-square"></i> Registation
          </p>

          <p className="p-3 text-[18px]">
            Click the Link below to register your self
          </p>
          <a href="https://forms.gle/MSNNxrFuDXEGSqNY9">
            <button className="m-2 px-3 py-1 bg-gradient-to-b from-slate-300 to-slate-600 rounded-md  animate-pulse text-white">
              Click Here
            </button>
          </a>
        </div>
      </section>

      {/* video section */}
      <div className="w-[100vw] flex flex-col justify-evenly items-center pb-8 home_res_container">
        <ReactPlayer
          className="rounded overflow-hidden home_res_player"
          controls
          url={"https://www.youtube.com/watch?v=hGKM7jO4qK8"}
        />
        {/* <ReactPlayer className='mx-8 rounded overflow-hidden' controls url={'https://www.youtube.com/watch?v=hGKM7jO4qK8'}/> */}
        <ReactPlayer
          className="rounded overflow-hidden home_res_player"
          controls
          url={"https://www.youtube.com/watch?v=hGKM7jO4qK8"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
