import React from "react";
import "./Header.css";
import LeftDrawer from "./LeftDrawer";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import { IconButton, Button } from "@material-ui/core";

function Header() {
  return (
    <div>
      <div className="header">
        <LeftDrawer />

        <Link to="/">
          <img
            src="https://cdn140.picsart.com/286399719094211.png?type=webp&to=min&r=640"
            alt="Pornhub-logo"
            className="header__logo"
          />
        </Link>

        <IconButton className="header__searchIcon">
          <SearchIcon />
        </IconButton>
      </div>
      <div className="header__sub">
        {["ライブカメラ", "XXXしよう", "LIVE XXX", "プレミアム"].map(text => (
          <Button key={text} className="header__button">
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Header;
