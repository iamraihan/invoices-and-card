import React from "react";
import leftArrow from "../images/arrow-left (2) 1.svg";
import SearchBar from "./SearchBar";
const TopBar = () => {
  return (
    <div>
      <div className="flex items-center gap-10">
        <span>
          <img src={leftArrow} alt="" />
        </span>
        <h5 className="text-[32px] text-dark font-extrabold leading-[44px]">
          Create Invoices
        </h5>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default TopBar;
