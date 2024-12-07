import React, { useEffect } from "react";
import { logo } from "../../assets/images";
import { userAppStore } from "../../store";

const Navbar = () => {
  const { isLogin }  = userAppStore();


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
      <div className="flex gap-6">
      {isLogin ? (
    <button>Profile</button>  // or use a Profile component
  ) : (
    <>
      <button>Signup</button>
      <button>Login</button>
    </>
  )}
      </div>
    </div>
  );
};

export default Navbar;
