import React from "react";
import GenerelDatails from "./GenerelDatails";
import SelectClient from "./SelectClient";
import TopBar from "./TopBar";

const Invoices = () => {
  return (
    <div className="invoice-container mt-9">
      <TopBar></TopBar>
      <SelectClient></SelectClient>
      <GenerelDatails></GenerelDatails>
      <h2>Hello invoices</h2>
    </div>
  );
};

export default Invoices;
