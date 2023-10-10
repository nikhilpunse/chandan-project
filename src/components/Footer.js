import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="flex flex-col border bg-gradient-to-r from-white  to-green-600 w-full footer_container">
        <div className="text-[18px] footer_div">
          <div className="mb-3 font-semibold text-[20px]">Contact us</div>
          <div>Email: udan.service1@gmail.com</div>
          <div>Whatsapp: 9146346830</div>
        </div>
        <div className="text-[18px] footer_div">
          <div className=" mb-3 font-semibold text-[20px]">
            Quick Links
          </div>
          <Link to="/">
            <div className=" underline cursor-pointer hover:text-white">
              Home
            </div>
          </Link>
          <Link to="/services">
            <div className=" underline cursor-pointer hover:text-white">
              Services
            </div>
          </Link>
          <Link to="about">
            <div className=" underline cursor-pointer hover:text-white">
              About
            </div>
          </Link>
          <div className=" underline cursor-pointer hover:text-white">
            Contact
          </div>
        </div>

        <div className=" py-1 flex items-center footer_div">
          <img className="w-[100px]" src="/images/udan logo new.png" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
