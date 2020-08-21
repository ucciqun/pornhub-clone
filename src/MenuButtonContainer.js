import React, { useState } from "react";
import "./MenuButtonContainer.css";

import VideocamIcon from "@material-ui/icons/Videocam";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Button, IconButton } from "@material-ui/core";

function MenuButtonContainer({ children, category, icon }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="menuButtonContainer">
        <Button className="menuButtonContainer__button">
          <VideocamIcon className="drawer__menuItem-icon" />
          <p className="drawer__menuItem-text">アダルト動画</p>
        </Button>
        <IconButton
          onClick={() => setOpen(!open)}
          className="menuButtonContainer__toggleButton"
        >
          {open ? (
            <ExpandLessIcon className="menuButtonContainer__toggleIcon" />
          ) : (
            <ExpandMoreIcon className="menuButtonContainer__toggleIcon" />
          )}
        </IconButton>
      </div>
      {open && children}
    </>
  );
}

export default MenuButtonContainer;
