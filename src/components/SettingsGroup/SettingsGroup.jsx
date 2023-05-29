import React from "react";

import "./settingsGroup.scss";

const SettingsGroup = (props) => {
  const {
    groupId,
    handleChangeColorGroupTitle,
    handleChangeTitleOfSingleGroup
  } = props;

  const colors = [
    "#ffa",
    "#fea",
    "#faa",
    "#faf",
    "#aaf",
    "#5af",
    "#aff",
    "#afa",
  ];

  const handleClickSetColor = (groupId, newColor) => {
    handleChangeColorGroupTitle(groupId, newColor);
  };
  return (
    <div className="settings-group">
      <div className="icons-controls">
        <input
          type="text"
          placeholder="Change title"
          maxLength={20}
          onChange={(e) => handleChangeTitleOfSingleGroup(groupId,e)}
        />
      </div>
      <div className="colors">
        {colors.map((e, i) => (
          <div
            key={i}
            className="color"
            style={{ backgroundColor: e }}
            onClick={() => {
              handleClickSetColor(groupId, e);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SettingsGroup;
