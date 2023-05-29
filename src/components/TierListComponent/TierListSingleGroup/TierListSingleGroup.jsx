import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { AiOutlineSetting } from "react-icons/ai";

import SettingsGroup from "../../SettingsGroup/SettingsGroup";
import TierListItem from "../TierListItem/TierListItem";
import TitleGroup from "../TitleGroup/TitleGroup";

import "./tierListSingleGroup.scss";

const TierListSingleGroup = (props) => {
  const {
    groupId,
    groupTitle,
    color,
    items,
    settings,
    handleChangeColorGroupTitle,
    handleChangeTitleOfSingleGroup,
    handleSetItems,
  } = props;

  const [openSettings, setOpenSettings] = useState(false);

  const handleChangeItemGroup = (item, groupId) => {
    handleSetItems((prevItems) => {
      return prevItems.map((e) => {
        return { ...e, groupId: e.title === item.title ? groupId : e.groupId };
      });
    });
  };
  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: () => ({ groupId: groupId }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const handleCloseSettings = () => {
    setOpenSettings(false);
  };
  const handleClickSettings = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <div className="group">
      <TitleGroup title={groupTitle} color={color} />
      <div className="dropable" ref={drop}>
        {items.map((e) => {
          return (
            e.groupId === groupId && (
              <TierListItem
                items={items}
                key={e.id}
                title={e.title}
                picture={e.picture}
                idItem={e.id}
                handleChangeItemGroup={handleChangeItemGroup}
              />
            )
          );
        })}
      </div>
      {settings === true && (
        <div className="nav">
          <AiOutlineSetting className="icon" onClick={handleClickSettings} />
          {openSettings && (
            <SettingsGroup
              groupId={groupId}
              handleChangeColorGroupTitle={handleChangeColorGroupTitle}
              handleCloseSettings={handleCloseSettings}
              handleChangeTitleOfSingleGroup={handleChangeTitleOfSingleGroup}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TierListSingleGroup;
