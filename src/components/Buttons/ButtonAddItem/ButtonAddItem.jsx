import React from "react";
import "../buttonAddItem.scss";
import "../defultButton.scss";

const ButtonAddItem = (props) => {
  const { textButton, myFunction, newItemText } = props;

  const handleOnClick = () => {
    myFunction(newItemText);
    
  };
  return (
    <div className="defult-button button-add-item" onClick={handleOnClick}>
      <div className="content">{textButton}</div>
    </div>
  );
};

export default ButtonAddItem;
