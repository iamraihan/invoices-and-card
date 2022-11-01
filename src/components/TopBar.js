import React from "react";
import leftArrow from "../images/arrow-left (2) 1.svg";
import search from "../images/006-search.svg";
import notificationOne from "../images/008-notification-01.svg";
const TopBar = () => {
  return (
    <div className="flex">
      {/* arrow */}
      <div className="flex items-center gap-10">
        <span>
          <img src={leftArrow} alt="" />
        </span>
        <h5 className="text-[32px] text-dark font-extrabold leading-[44px]">
          Create Invoices
        </h5>
      </div>
      {/* search bar */}
      <div className="relative ml-14">
        <input
          type="text"
          placeholder="Search here..."
          className="input w-full max-w-xs border relative border-solid border-[#EEEEEE] rounded-[20px] "
        />
        <img className="absolute top-[8px] right-[20px]" src={search} alt="" />
      </div>
      {/* notification */}
      <div className="flex items-center relative ml-5">
        <img className="" src={notificationOne} alt="" />
        <p className="notification-btn notification-btn--yellow  absolute top-[-15px] right-[-19px]">
          12
        </p>
      </div>
    </div>
  );
};

export default TopBar;
