import { React, useState } from "react";
import { logo } from "../assets/images";
import { apiClient } from "../lib/apiClient";
import { HOST, SIGNUP_ROUTE } from "../utils/constants";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateSignup = () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill all details");
      return false;
    }

    if (password !== confirmPassword) {
      alert("password doesn't match");
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    try {
      const res = await apiClient.post(
        SIGNUP_ROUTE, 
        { email, password },
        { withCredentials: true } 
      );
      console.log(res);
      if (res.status === 201) {
        console.log("Signup successful");
      }
    } catch (err) {
      console.error('Signup failed:', err.response);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateSignup()) {
      await handleSignup();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex justify-center items-center flex-col">
        <a href="/">
          <img src={logo} alt="logo" className="w-[20rem] mb-10" />
        </a>
        <form onSubmit={handleSubmit}>
          <div className="flex border border-black rounded-lg w-[35vw] h-[60vh] justify-center items-center flex-col">
            <p className="text-[3rem] font-bold text-center mb-[2rem]">
              Create an account!
            </p>
            <div className="flex flex-col mb-4">
              <p className="text-lg font-semibold mb-2">Email Adress</p>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-[20vw] border border-black rounded-3xl px-5 py-3"
              />
            </div>
            <div className="flex flex-col mb-4">
              <p className="text-lg font-semibold mb-2">Password*</p>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-[20vw] border border-black rounded-3xl px-5 py-3"
              />
            </div>
            <div className="flex flex-col mb-14">
              <p className="text-lg font-semibold mb-2">Confirm Password*</p>
              <input
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                className="w-[20vw] border border-black rounded-3xl px-5 py-3"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="px-5 py-3 border-none bg-blue-600 text-white rounded-3xl w-[20vw] text-lg mb-4">
              Signup
            </button>
            <div>
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">
                Sign in now
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
