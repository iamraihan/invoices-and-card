import React from "react";
import AttachFile from "./AttachFile";
import GenerelDatails from "./GenerelDatails";
import SelectClient from "./SelectClient";
import TopBar from "./TopBar";

const Invoices = () => {
  return (
    <div className="invoice-container mt-9">
      <TopBar></TopBar>
      <SelectClient></SelectClient>
      <GenerelDatails></GenerelDatails>
      <AttachFile></AttachFile>
    </div>
  );
};

export default Invoices;
