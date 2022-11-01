import React from "react";
import downArrow from "../images/down-arrow.svg";
import balance from "../images/Group 11.png";
import option from "../images/ic_option.svg";

const CardListDetails = () => {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div>
          <div className="flex justify-between">
            <div>
              <h5 className="text-xl text-dark font-bold mb-[10px]">
                Card List
              </h5>
              <p className="text-gray-20 font-bold text-sm">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div>
              <button className="flex gap-6 px-[29px] py-[18px] bg-[#F3F0FF] rounded-[20px] table-item-content">
                Newest{" "}
                <span>
                  <img src={downArrow} alt="" />
                </span>
              </button>
            </div>
          </div>
          {/* card details  */}
          <div className="grid lg:grid-cols-7 grid-cols-3 gap-5 mt-8">
            <div className="w-[129px] h-[85px] bg-[#306FEA] rounded-[20px]"></div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Card Type</p>
              <h5 className="table-item-content">Primary</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Bank</p>
              <h5 className="table-item-content">ABC Bank</h5>
            </div>
            <div className="flex flex-col justify-center ">
              <p className="text-sm text-gray-20 mb-2">Card Number</p>
              <h5 className="table-item-content ">**** **** **** 2256</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Namein Card</p>
              <h5 className="table-item-content">Eren Yeager</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold  leading-[25px] text-primary whitespace-nowrap">
                See Number
              </p>
            </div>
            <div className="flex  items-center">
              <img src={option} alt="" />
            </div>
          </div>
          {/* card details  */}
          <div className="grid lg:grid-cols-7 grid-cols-3 gap-5 mt-8">
            <div className="w-[129px] h-[85px] bg-[#ffb320] rounded-[20px]"></div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Card Type</p>
              <h5 className="table-item-content">Primary</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Bank</p>
              <h5 className="table-item-content">Finefine Bank</h5>
            </div>
            <div className="flex flex-col justify-center ">
              <p className="text-sm text-gray-20 mb-2">Card Number</p>
              <h5 className="table-item-content ">**** **** **** 2256</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Namein Card</p>
              <h5 className="table-item-content">Eren Yeager</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold  leading-[25px] text-primary whitespace-nowrap">
                See Number
              </p>
            </div>
            <div className="flex  items-center">
              <img src={option} alt="" />
            </div>
          </div>
          {/* card details  */}
          <div className="grid lg:grid-cols-7 grid-cols-3 gap-5 mt-8">
            <div className="w-[129px] h-[85px] bg-[#c93bbb] rounded-[20px]"></div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Card Type</p>
              <h5 className="table-item-content">Primary</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Bank</p>
              <h5 className="table-item-content">Makan Bank</h5>
            </div>
            <div className="flex flex-col justify-center ">
              <p className="text-sm text-gray-20 mb-2">Card Number</p>
              <h5 className="table-item-content ">**** **** **** 2256</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Namein Card</p>
              <h5 className="table-item-content">Eren Yeager</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold  leading-[25px] text-primary whitespace-nowrap">
                See Number
              </p>
            </div>
            <div className="flex  items-center">
              <img src={option} alt="" />
            </div>
          </div>
          {/* card details  */}
          <div className="grid lg:grid-cols-7 grid-cols-3 gap-5 mt-8">
            <div className="w-[129px] h-[85px] bg-[#f83838] rounded-[20px]"></div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Card Type</p>
              <h5 className="table-item-content">Primary</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Bank</p>
              <h5 className="table-item-content">Where Bank</h5>
            </div>
            <div className="flex flex-col justify-center ">
              <p className="text-sm text-gray-20 mb-2">Card Number</p>
              <h5 className="table-item-content ">**** **** **** 8843</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-20 mb-2">Namein Card</p>
              <h5 className="table-item-content">Eren Yeager</h5>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold  leading-[25px] text-primary whitespace-nowrap">
                See Number
              </p>
            </div>
            <div className="flex  items-center">
              <img src={option} alt="" />
            </div>
          </div>
        </div>
        {/* image  */}
        <div className="flex  justify-end items-center ">
          <img src={balance} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardListDetails;
