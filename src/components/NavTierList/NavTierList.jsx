import React from "react";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";
import ButtonOption from "../Buttons/ButtonOption/ButtonOption";

import "./navTierList.scss";

const NavTierList = (props) => {
  const { handleRestartList, handleOpenCreatorItem, handleDeleteAllItems } =
    props;
  return (
    <div className="nav-tier-list">
      <ButtonLink text={"home"} path={"/"} />
      <ButtonOption text="Add Item" functionOnClick={handleOpenCreatorItem} />
      <ButtonOption text="reset list" functionOnClick={handleRestartList} />
      <ButtonOption
        text="Delete all items"
        functionOnClick={handleDeleteAllItems}
      />
    </div>
  );
};

export default NavTierList;
