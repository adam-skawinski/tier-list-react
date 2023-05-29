import React from "react";
import { Link } from "react-router-dom";

import "../defultButton.scss";

const ButtonLink = (props) => {
  const { text, path } = props;
  
  return (
    <Link className="defult-button" to={path}>
      <div className="content">{text}</div>
    </Link>
  );
};

export default ButtonLink;
