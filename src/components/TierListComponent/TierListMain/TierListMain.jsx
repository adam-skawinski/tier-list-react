import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import CreatorItem from "../../CreatorItem/CreatorItem";
import NavTierList from "../../NavTierList/NavTierList";
import TierListSingleGroup from "../TierListSingleGroup/TierListSingleGroup";

import "./tierListMain.scss";

const TierListMain = () => {
  const myIdGroup = "e156f6d9-d46b-41f2-8ee0-d83262be6856";
  const [allGroup, setAllGroup] = useState([
    {
      id: "33bc9acd-097f-4b33-a18b-9512802e852b",
      title: "A",
      color: "#faa",
      settings: true,
    },
    {
      id: "74b7ea39-2777-4bff-8d09-75a6bedf9f97",
      title: "B",
      color: "#fea",
      settings: true,
    },
    {
      id: "e156f6d9-d46b-41f2-8ee0-d83262be68df",
      title: "C",
      color: "#afa",
      settings: true,
    },
    {
      id: "4e1bc423-6b4c-4867-aa82-a2c04ef3af8a",
      title: "D",
      color: "#aff",
      settings: true,
    },
    {
      id: "d38e82c2-b6a7-4a29-b4b1-e4db6aa4d8a0",
      title: "E",
      color: "#5af",
      settings: true,
    },
    {
      id: myIdGroup,
      title: "my",
      color: "#fff",
      settings: false,
    },
  ]);

  const [items, setItems] = useState([]);

  const [openCreatorItem, setOpenCreatorItem] = useState(false);

  const handleSetItems = (value) => {
    setItems(value);
  };
  const handleChangeAllGroup = (value) => {
    setAllGroup(value);
  };

  const handleOpenCreatorItem = () => {
    setOpenCreatorItem(true);
  };
  const handleCloseCreatorItem = () => {
    setOpenCreatorItem(false);
  };

  const handleDeleteSingleGroup = (id) => {
    handleChangeAllGroup(allGroup.filter((group) => group.id !== id));
  };

  const handleChangeColorGroupTitle = (id, newColor) => {
    const updatedGroup = allGroup.map((group) => {
      if (group.id === id) return { ...group, color: newColor };
      return group;
    });
    handleChangeAllGroup(updatedGroup);
  };

  const handleRestartList = () => {
    handleSetItems(
      items.map((e) => ({
        ...e,
        groupId: myIdGroup,
      }))
    );
  };

  const handleChangeTitleOfSingleGroup = (id, event) => {
    const newTitle = event.target.value;

    handleChangeAllGroup(
      allGroup.map((group) =>
        group.id === id ? { ...group, title: newTitle } : group
      )
    );
  };

  const handleAddItemToGroupMy = (text) => {
    const newItem = {
      id: crypto.randomUUID(),
      groupId: myIdGroup,
      title: text,
      picture: null,
    };
    return handleSetItems([...items, newItem]);
  };
  const handleDeleteAllItems = () => {
    handleSetItems([]);
  };

  return (
    <div className="tier-list-main">
      <DndProvider backend={HTML5Backend}>
        <div className="tier-list-groups">
          {allGroup.map((group, i) => (
            <TierListSingleGroup
              key={i}
              groupId={group.id}
              groupTitle={group.title}
              color={group.color}
              items={items}
              settings={group.settings}
              handleDeleteSingleGroup={handleDeleteSingleGroup}
              handleChangeColorGroupTitle={handleChangeColorGroupTitle}
              handleChangeTitleOfSingleGroup={handleChangeTitleOfSingleGroup}
              setItems={setItems}
              handleSetItems={handleSetItems}
            />
          ))}
        </div>
      </DndProvider>
      <NavTierList
        handleRestartList={handleRestartList}
        handleOpenCreatorItem={handleOpenCreatorItem}
        handleDeleteAllItems={handleDeleteAllItems}
      />
      {openCreatorItem && (
        <CreatorItem
          handleCloseCreatorItem={handleCloseCreatorItem}
          handleAddItemToGroupMy={handleAddItemToGroupMy}
        />
      )}
    </div>
  );
};

export default TierListMain;
