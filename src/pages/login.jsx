import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../lib/apiClient";
import { logo } from "../assets/images";
import { userAppStore } from "../store";
import storeData from "../data/store-data/storeData.json"
import { LOGIN_ROUTE } from "../utils/constants";

const Login = () => {
  const { setUserInfo, setIsLogin } = userAppStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    if (!email || !password) {
      alert("Please fill all details");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    try {
      const res = await apiClient.post(
        LOGIN_ROUTE,
        {
          email,
          password,
          storeData
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if(res.status === 200){
        setIsLogin(true);
        setUserInfo(res.data.user);
        if(res.data.user){
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateLogin()){
      await handleLogin();
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
            <p className="text-[3rem] font-bold text-center mb-[3rem]">
              Welcome to Limme!
            </p>
            <div className="flex flex-col mb-4">
              <p className="text-lg font-semibold mb-2">Email Adress</p>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[20vw] border border-black rounded-3xl px-5 py-3"
              />
            </div>
            <div className="flex flex-col mb-10">
              <p className="text-lg font-semibold mb-2">Password*</p>
              <input
                type="password"
                placeholder="Password"
                className="w-[20vw] border border-black rounded-3xl px-5 py-3"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <p className="text-right text-gray-500">Forgot Password?</p>
            </div>
            <button
              type="submit"
              className="px-5 py-3 border-none bg-blue-600 text-white rounded-3xl w-[20vw] text-lg mb-4"
            >
              Login
            </button>
            <div>
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500">
                Create an account
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
