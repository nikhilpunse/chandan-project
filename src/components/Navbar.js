import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({gradient='from-blue-400 to-violet-800'}) => {
  return (
    <div className="w-full sticky top-0 z-40">    
      <nav className={`w-full p-2 sm:p-3 bg-gradient-to-r ${gradient} flex items-center font-semibold text-white border rounded text-[14px] sm:text-[16px]`}>
        <div className="mr-3 md:mr-7">
          <i className="text-[20px] ml-3 fa fa-home" aria-hidden="true"></i>
        </div>
        <Link to='/'><div className="mr-3 md:mr-10 hover:scale-[1.1]"> Home</div></Link>
        <Link to='/services'><div className="mr-3 md:mr-10 hover:scale-[1.1]">Services</div></Link>
        <div className="mr-3 md:mr-10 hover:scale-[1.1]">Contact</div>
        <Link to='/about'><div className="mr-3 md:mr-10 hover:scale-[1.1]">About</div></Link>
      </nav>
    </div>
  );
};

export default Navbar;
