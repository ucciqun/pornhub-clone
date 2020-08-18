import React, { useState } from "react";
import "./LeftDrawer.css";
import Drawer from "@material-ui/core/Drawer";
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function LeftDrawer() {
  const [state, setState] = useState(false);
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  return (
    <div>
      <IconButton className="drawer__menuIcon" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        <div
          className="drawer__contents"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          TEST
        </div>
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
