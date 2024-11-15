import React from "react";
import { homeImg } from "../../assets/images";

const Header = () => {
  return (
    <div className="h-auto w-full ">
      <div className="flex justify-center items-center px-8 py-8 gap-[7rem]">
        <div>
          <div>
            What is Limme?
          </div>
          <div>
          Limme is the leading destination for college students to buy and sell books, electronics, apparel, and much more.
          </div>
          <button>
            Find my school
          </button>
        </div>
        <div>
          <img
            src={homeImg}
            alt=""
            className="h-[50vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
