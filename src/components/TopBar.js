import React from "react";
import leftArrow from "../images/arrow-left (2) 1.svg";
import search from "../images/006-search.svg";
import notificationOne from "../images/008-notification-01.svg";
import message from "../images/009-message.svg";
import schedule from "../images/007-schedule.svg";
import addFile from "../images/019-add-file.svg";
import userIcon from "../images/ic_chevron.svg";
const TopBar = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-y-3  ">
      {/* arrow */}
      <div className="flex  gap-5">
        <span className="mt-2">
          <img src={leftArrow} alt="" />
        </span>
        <h5 className="text-[30px] text-2xl text-dark font-extrabold leading-[44px]">
          Create Invoices
        </h5>
      </div>
      {/* search bar */}
      <div className="relative ml-8 w-2/6 md:w-auto">
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
        <p className="notification-btn bg-[#FBAE3B]  absolute top-[-6px] right-[-19px]">
          12
        </p>
      </div>
      <div className="flex items-center relative ml-5">
        <img className="" src={message} alt="" />
        <p className="notification-btn bg-[#09BD3C]  absolute top-[-6px] right-[-19px]">
          85
        </p>
      </div>
      <div className="flex items-center relative ml-5">
        <img className="" src={schedule} alt="" />
        <p className="notification-btn bg-[#5A45AA]  absolute top-[-6px] right-[-19px]">
          25
        </p>
      </div>

      {/* addfile button  */}
      <button className="ml-12 dashboard-content-text text-primary dashboard-border-sm border-primary rounded-[20px] px-[21px] py-[14px] xl:flex gap-[13px] items-center hidden">
        {" "}
        <img src={addFile} alt="" />
        New Invoices
      </button>
      {/* user  */}
      <div className="ml-10 flex items-center">
        <div className="">
          <h5 className="text-dark text-xl font-bold">James Blunt</h5>
          <p className="text-sm text-gray-20 text-end">Super Admin</p>
        </div>
        <div className="bg-[#C4C4C4] rounded-[14px] h-[57px] w-[57px] ml-3"></div>
        <div className="ml-3">
          <img src={userIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
