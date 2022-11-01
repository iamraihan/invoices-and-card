import React from "react";
import schedule from "../images/small-schedule.svg";
import ItemDescription from "./ItemDescription";

const GenerelDatails = () => {
  return (
    <div>
      <div className="inner-section">
        <h5 className="inner-section-header">GENERAL</h5>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <label className="label">
              <span className="label-text text-gray-20 text-base font-semibold">
                INVOICE NO
              </span>
            </label>
            <input
              type="text"
              placeholder="#INV-123124124"
              className="general-input general-input--gray"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-20 text-base font-semibold">
                AMOUNT (USD)NO
              </span>
            </label>
            <input
              type="text"
              placeholder="5,000 "
              className="general-input general-input--primary"
            />
          </div>
          <div className="relative">
            <label className="label">
              <span className="label-text text-gray-20 text-base font-semibold">
                DUE DATE
              </span>
            </label>
            <input
              type="text"
              placeholder="December 11th, 2020"
              className="general-input general-input--gray "
            />
            <img
              className="absolute top-[49px] right-[55px]"
              src={schedule}
              alt=""
            />
          </div>
        </div>

        {/* item description  */}

        <ItemDescription></ItemDescription>
      </div>
    </div>
  );
};

export default GenerelDatails;
