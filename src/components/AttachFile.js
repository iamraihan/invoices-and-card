import React from "react";
import upload from "../images/upload.svg";
import contact from "../images/contact-pdf.svg";

const AttachFile = () => {
  return (
    <div>
      <div className="inner-section mt-10">
        <h2 className="inner-section-header">Attach File</h2>

        <div className="flex flex-wrap lg:!flex-nowrap items-center mt-5 gap-5">
          <div>
            <label class="upload-btn ">
              <img src={upload} alt="" />
              <div className="flex flex-col justify-center">
                <span class="table-item-content">Select a file</span>
                <span class="text-gray-20 text-base font-semibold">
                  PDF, DOC, PPT, JPG, PNG
                </span>
              </div>
              <input type="file" class="hidden" />
            </label>
          </div>

          <div>
            <button className=" dashboard-content-text text-primary border border-solid border-[#5A45AA]  rounded-[14px] px-[21px] py-[14px] flex gap-[13px] items-center ">
              <img src={contact} alt="" />
              <div className="flex flex-col items-start justify-center">
                <span className="table-item-content">Contact_2020.pdf</span>
                <span>456 KB</span>
              </div>
            </button>
          </div>
          <div>
            <button className="invoice-btn invoice-btn--primary">
              SEND INVOICE
            </button>
          </div>
          <div>
            <button className="invoice-btn invoice-btn--gray">
              SAVE TO LATER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachFile;
