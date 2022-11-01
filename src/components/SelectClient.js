import React from "react";
import companyLogo from "../images/companyLogo.svg";
import map from "../images/iconMap.svg";
import message from "../images/message.svg";
import telephone from "../images/telephone.svg";

const SelectClient = () => {
  return (
    <div>
      <div className="inner-section">
        <h5 className="inner-section-header mb-3 ">SELECT CLIENT</h5>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20">
          {/* card  */}
          <div className="flex gap-6 shadow-3xl p-5 rounded-xl ">
            <div className="flex justify-start ">
              <img className="" src={companyLogo} alt="" />
            </div>
            <div>
              <h5 className="text-dark text-xl font-bold">Yellowisme</h5>
              <p className="text-sm text-gray-20 ">Creative Agency</p>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap lg:flex-nowrap ">
            <div className=" w-full">
              <img className="" src={map} alt="" />
            </div>
            <div>
              <p className="text-base leading-[22px] font-semibold text-gray-20 mb-3">
                ADDRESS
              </p>
              <h5 className="dashboard-content-text text-dark ">
                Franklin Avenue Street New York, ABC 5562 United State
              </h5>
            </div>
          </div>
          <div className="flex gap-6  ">
            <div className="w-full">
              <img className="" src={message} alt="" />
            </div>
            <div>
              <p className="text-base leading-[22px] font-semibold text-gray-20 mb-3">
                EMAIL
              </p>
              <h5 className="dashboard-content-text text-dark ">
                yellowisme@mail.com
              </h5>
            </div>
          </div>
          <div className="flex gap-6  ">
            <div className=" w-full">
              <img className="" src={telephone} alt="" />
            </div>
            <div>
              <p className="text-base leading-[22px] font-semibold text-gray-20 mb-3">
                TELEPHONE
              </p>
              <h5 className="dashboard-content-text text-dark ">
                (012) 3456 789
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectClient;
