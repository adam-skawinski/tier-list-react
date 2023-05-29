import React from "react";
import { useDrag } from "react-dnd";

import "./tierListItem.scss";

const TierListItem = (props) => {
  const { title, picture, color, idItem, handleChangeItemGroup } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: {
      title: title,
      id: idItem,
    },
    end: (item, monitor) => {
      const resultDrop = monitor.getDropResult();
      if (resultDrop) {
        const { groupId } = resultDrop;
        handleChangeItemGroup(item, groupId);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="item"
      style={{
        backgroundColor: isDragging ? "#faa" : color,
        opacity: isDragging ? 0.5 : 1,
      }}
      ref={drag}
    >
      <h2>{title}</h2>
      {picture !== null && <p>{picture}</p>}
    </div>
  );
};

export default TierListItem;
