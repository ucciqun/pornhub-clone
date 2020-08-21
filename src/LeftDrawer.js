import React, { useState } from "react";
import "./LeftDrawer.css";
import MenuButtonContainer from "./MenuButtonContainer";
import { useHistory } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import CreateIcon from "@material-ui/icons/Create";
import PublishIcon from "@material-ui/icons/Publish";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import ScheduleIcon from "@material-ui/icons/Schedule";

function LeftDrawer() {
  const [state, setState] = useState(false);
  const history = useHistory();
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  const category = [
    {
      title: "プレイリスト",
      icon: <MenuIcon />
    },
    { title: "プレイリスト", icon: <EqualizerIcon /> },
    { title: "プレイリスト", icon: <MenuIcon /> }
  ];
  return (
    <div className="drawer">
      <IconButton className="drawer__menuIcon" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        <div
          className="drawer__contents"
          // onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="drawer__buttonsContainer">
            <Button
              className="drawer__buttonsItem"
              onClick={() => history.replace("/login")}
            >
              <PersonIcon className="drawer__button" />
              <p className="drawer__text">ログイン</p>
            </Button>
            <Button className="drawer__buttonsItem">
              <CreateIcon className="drawer__button" />
              <p className="drawer__text">登録する</p>
            </Button>
            <Button className="drawer__buttonsItem">
              <PublishIcon className="drawer__button" />
              <p className="drawer__text">アップロード</p>
            </Button>
          </div>
          <div className="drawer__menuContainer">
            <h2 className="drawer__menuTitle">メイン</h2>
            <MenuButtonContainer>
              <Button className="drawer__menuItem-sub" fullWidth>
                <ThumbUpIcon className="drawer__menuItem-icon" />
                <p className="drawer__menuItem-text">ベスト評価</p>
              </Button>
              <Button className="drawer__menuItem-sub" fullWidth>
                <WhatshotIcon className="drawer__menuItem-icon" />
                <p className="drawer__menuItem-text">急上昇</p>
              </Button>
              <Button className="drawer__menuItem-sub" fullWidth>
                <EqualizerIcon className="drawer__menuItem-icon" />
                <p className="drawer__menuItem-text">一番人気</p>
              </Button>
              <Button className="drawer__menuItem-sub" fullWidth>
                <EmojiObjectsIcon className="drawer__menuItem-icon" />
                <p className="drawer__menuItem-text">おすすめ</p>
              </Button>
              <Button className="drawer__menuItem-sub" fullWidth>
                <ScheduleIcon className="drawer__menuItem-icon" />
                <p className="drawer__menuItem-text">最新</p>
              </Button>
              {category.map(e => (
                <Button className="drawer__menuItem-sub" fullWidth>
                  <div className="drawer__menuItem-icon">{e.icon}</div>

                  <p className="drawer__menuItem-text">{e.title}</p>
                </Button>
              ))}
            </MenuButtonContainer>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
