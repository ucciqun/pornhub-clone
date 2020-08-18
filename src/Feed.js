import React from "react";
import "./Feed.css";
import { Button } from "@material-ui/core";

function Feed() {
  return (
    <div>
      <h1>Japanで急上昇🇯🇵</h1>
      <Button className="feed__button" variant="outlined">
        全てのホットなビデオを視聴
      </Button>
    </div>
  );
}

export default Feed;
