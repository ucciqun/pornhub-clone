import React from "react";
import "./Thumbnail.css";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function Thumbnail({ image, HD, title, name, views, rate }) {
  return (
    <div className="thumbnail">
      <img src={image} alt={title} className="thumbnail__img" />
      <h3>{title}</h3>
      <div className="thumbnail__detail">
        <small>{name}</small>
        <small>{views}再生数</small>
        <ThumbUpIcon style={{ color: "gray" }} fontSize="small" />
        <small>{rate}</small>
      </div>
    </div>
  );
}

export default Thumbnail;
