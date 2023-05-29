import React, { useState } from "react";
import HomeButtonList from "../../../data/HomeButtonList.json";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";

import "./buttonsHomeList.scss";

const ButtonsHomeList = () => {
  const [data] = useState(HomeButtonList);
  return (
    <div className="buttons-home-list">
      {data.map((e) => (
        <ButtonLink key={e.id} text={e.text} path={e.path} />
      ))}
    </div>
  );
};

export default ButtonsHomeList;
