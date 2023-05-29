import React from 'react'

import "./titleGroup.scss"

const TitleGroup = (props) => {
  const { title, picture, color} = props;

  return (
    <div
    className="title"
    style={{ backgroundColor: color}}
  >
    <h2>{title}</h2>
    {picture !== null && <p>{picture}</p>}
  </div>
  )
}

export default TitleGroup
