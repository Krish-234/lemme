import React from "react";
import { logo } from "../assets/images";

const login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex justify-center items-center flex-col">
        <a href="/">
        <img src={logo} alt="logo" className="w-[20rem] mb-10" />
        </a>
        <form>
          <div className="flex border border-black rounded-lg w-[35vw] h-[60vh] justify-center items-center flex-col">
            <p className="text-[3rem] font-bold text-center mb-[3rem]">
              Welcome to Limme!
            </p>
            <div className="flex flex-col mb-4">
            <p className="text-lg font-semibold mb-2">
            Email Adress
            </p>
            <input
              type="text"
              placeholder="Email"
              className="w-[20vw] border border-black rounded-3xl px-5 py-3"
            />
            </div>
            <div className="flex flex-col mb-10">
            <p className="text-lg font-semibold mb-2">
            Password*
            </p>
            <input
              type="text"
              placeholder="Password"
              className="w-[20vw] border border-black rounded-3xl px-5 py-3"
            />
            <p className="text-right text-gray-500">
                Forgot Password?
            </p>
            </div>
            
            <button type="submit" className="px-5 py-3 border-none bg-blue-600 text-white rounded-3xl w-[20vw] text-lg mb-4">
                Login
            </button>
            <div>
                Don't have an account? <a href="/signup" className="text-blue-500">Create an account</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
