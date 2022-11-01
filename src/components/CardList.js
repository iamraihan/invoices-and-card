import React from "react";
import bgOne from "../images/bg/bg-1.png";
import bgTwo from "../images/bg/bg-2.png";
import bgThree from "../images/bg/bg-3.png";
import bgFour from "../images/bg/bg-4.png";

const CardList = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-8">
        <div>
          <img src={bgOne} alt="" />
        </div>
        <div>
          <img src={bgTwo} alt="" />
        </div>
        <div>
          <img className="" src={bgThree} alt="" />
        </div>
        <div>
          <img src={bgFour} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardList;
