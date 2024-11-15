import React from "react";
import { logo } from "../../assets/images";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[6rem] py-4 bg-white">
      <div className="flex justify-center items-center">
        <img src={logo} alt="" className="w-[14rem]" />
      </div>
      <div className="flex gap-6">
        <div>
          <a href="#">Explore</a>
        </div>
        <div>
          <a href="#">Library</a>
        </div>
        <div>
          <a href="#">my School</a>
        </div>
      </div>
      <div>
        <button>login</button>
      </div>
    </div>
  );
};

export default Navbar;
