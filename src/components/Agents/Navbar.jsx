import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full z-10 fixed flex flex-row p-3 justify-between sm:px-20 px-10 shadow-md shadow-slate-500 items-center text-white bg-slate-800">
      <div data-aos="fade" data-aos-duration="2000" data-aos-delay="100">
        <h1 className="font-bold sm:text-3xl text-xl">
          Atllas Take-Home Assessment
        </h1>
      </div>
      {/*//! HOME  */}
      <div data-aos="fade" data-aos-duration="2000" data-aos-delay="100">
        <Link to="/">
          <p className=" duration-300 rounded-full px-2 py-1 hover:bg-slate-400 hover:text-white">
            Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
