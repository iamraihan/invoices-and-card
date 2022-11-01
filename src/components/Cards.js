import React from "react";
import CardList from "./CardList";
import CardListDetails from "./CardListDetails";
import CardTopBar from "./CardTopBar";
import ProgressBar from "./ProgressBar";

const Cards = () => {
  return (
    <div className="mt-9 invoice-container">
      <CardTopBar></CardTopBar>
      <CardList></CardList>
      <ProgressBar></ProgressBar>
      <CardListDetails></CardListDetails>
    </div>
  );
};

export default Cards;
