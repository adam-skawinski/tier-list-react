import React from "react";
import Header from "../../components/Header/Header";

import "./tierList.scss";
import TierListMain from "../../components/TierListComponent/TierListMain/TierListMain";

const TierList = () => {
  return (
    <div className="tier-list">
      <Header />
      <TierListMain />
      
    </div>
  );
};

export default TierList;
