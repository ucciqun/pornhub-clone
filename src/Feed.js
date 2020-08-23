import React from "react";
import "./Feed.css";
import Thumbnail from "./Thumbnail";

import { Button, Divider } from "@material-ui/core";

function Feed() {
  return (
    <div className="feed">
      <h1>Japanで急上昇🇯🇵</h1>
      <Thumbnail
        image="https://media.giphy.com/media/BWD3CtcudWL28/giphy.gif"
        HD="true"
        title="Spider Man's Thumbnail"
        name="tobey maguire"
        views="100K"
        rate="98%"
      />
      <Thumbnail
        image="https://media.giphy.com/media/jIzXYqaQ0nLkA/giphy.gif"
        HD="true"
        title="Dancing Bat Man"
        name="Bat Woman"
        views="4.3M"
        rate="17%"
      />
      <Thumbnail
        image="https://media.giphy.com/media/ZXeWyUaxZfAm8AVtR0/giphy.gif"
        HD="true"
        title="Spider Man's Thumbnail"
        name="tobey maguire"
        views="100K"
        rate="98%"
      />
      <Thumbnail
        image="https://media.giphy.com/media/BWD3CtcudWL28/giphy.gif"
        HD="true"
        title="Spider Man's Thumbnail"
        name="tobey maguire"
        views="100K"
        rate="98%"
      />
      <Button className="feed__button" variant="outlined" fullWidth>
        全てのホットなビデオを視聴
      </Button>

      <h1>あなたにおすすめ</h1>
      <Thumbnail
        image="https://media.giphy.com/media/BWD3CtcudWL28/giphy.gif"
        HD="true"
        title="Spider Man's Thumbnail"
        name="tobey maguire"
        views="100K"
        rate="98%"
      />

      <Button className="feed__button" variant="outlined" fullWidth>
        全てのおすすめビデオを視聴
      </Button>

      <h1>Japanで一番人気🇯🇵</h1>
      <Thumbnail
        image="https://media.giphy.com/media/jIzXYqaQ0nLkA/giphy.gif"
        HD="true"
        title="Dancing Bat Man"
        name="Bat Woman"
        views="4.3M"
        rate="17%"
      />

      <Button className="feed__button" variant="outlined" fullWidth>
        最も視聴されたものをすべて見る
      </Button>
      <div className="feed__pages">
        <Button style={{ flex: 2, color: "lightgray" }}>前へ</Button>
        {[1, 2, 3, 4].map(e => (
          <Button
            style={{
              flex: 1,
              color: e === 1 ? "black" : "lightgray",
              backgroundColor: e === 1 ? "orange" : "black",
              margin: 3,
              borderColor: "white"
            }}
            key={e}
          >
            {e}
          </Button>
        ))}
        <Button style={{ flex: 2, color: "lightgray" }}>次へ</Button>
      </div>
    </div>
  );
}

export default Feed;
