import React from "react";
import "../defultButton.scss";
const ButtonOption = (props) => {
  const { text, functionOnClick } = props;

  return (
    <div className="defult-button" onClick={functionOnClick}>
      <div className="content">{text}</div>
    </div>
  );
};

export default ButtonOption;
