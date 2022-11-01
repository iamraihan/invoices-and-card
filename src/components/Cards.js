import React from "react";
import CardList from "./CardList";
import CardTopBar from "./CardTopBar";
import ProgressBar from "./ProgressBar";

const Cards = () => {
  return (
    <div className="mt-9 invoice-container">
      <CardTopBar></CardTopBar>
      <CardList></CardList>
      <ProgressBar></ProgressBar>
    </div>
  );
};

export default Cards;
