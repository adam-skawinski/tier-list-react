import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

import ButtonAddItem from "../Buttons/ButtonAddItem/ButtonAddItem";

import "./creatorItem.scss";

const CreatorItem = (props) => {
  const { handleCloseCreatorItem, handleAddItemToGroupMy } = props;

  const [text, setText] = useState("");

  const handleClearText = () => {
    setText("");
  };

  const handleSetText = (value) => {
    setText(value);
  };

  const handleOnClickAddButton = () => {
    if (text === "") return;
    handleAddItemToGroupMy(text.trim());
    handleClearText();
  };

  return (
    <div className="creator-item">
      <button className="close-icon-container" onClick={handleCloseCreatorItem}>
        <TfiClose className="close-icon" />
      </button>
      <div className="text">Create Item</div>
      <input
        type="text"
        placeholder="Title"
        maxLength={20}
        value={text}
        onChange={(e) => {
          handleSetText(e.target.value);
        }}
      />
      <ButtonAddItem
        textButton={"Add"}
        myFunction={handleOnClickAddButton}
        newItemText={text}
      />
    </div>
  );
};

export default CreatorItem;
