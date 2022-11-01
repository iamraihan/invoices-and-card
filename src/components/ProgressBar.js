import React from "react";
import cardIncome from "../images/cardIncome.png";

const ProgressBar = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-9 mt-10">
        <div className="max-w-[1000px]">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-12">
            <div className="">
              <p className="text-xl text-dark font-bold">Wallet Balance</p>
              <h5 className="text-primary text-[32px] leading-[44px] font-extrabold mt-[7px]">
                $824,571.93
              </h5>
            </div>
            <div>
              <p className="text-sm text-gray-20 font-bold">VALID THRU</p>
              <h5 className="table-item-content mt-[7px]">08/21</h5>
            </div>
            <div>
              <p className="text-sm text-gray-20 font-bold">CARD HOLDER</p>
              <h5 className="table-item-content mt-[7px]">Eren Yeager</h5>
            </div>
            <div>
              <h5 className="table-item-content mt-[7px]">
                **** **** **** 1234
              </h5>
            </div>
          </div>
          <progress
            className="progress progress-success  h-[18px] w-[800px] progress-bg-gradient-to-r from-[#5A45AA] to-[#3F9FD6] hidden lg:block"
            value="80"
            max="100"
          ></progress>
        </div>
        <div>
          <img src={cardIncome} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
