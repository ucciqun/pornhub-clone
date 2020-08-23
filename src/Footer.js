import React, { useState } from "react";
import "./Footer.css";

import VideocamIcon from "@material-ui/icons/Videocam";
import CategoryIcon from "@material-ui/icons/Category";
import GifIcon from "@material-ui/icons/Gif";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import PeopleIcon from "@material-ui/icons/People";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from "@material-ui/icons/Reddit";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ComputerIcon from "@material-ui/icons/Computer";
import TabletMacIcon from "@material-ui/icons/TabletMac";
import { Button, Divider } from "@material-ui/core";

function Footer() {
  const [textToogle, setTextToggle] = useState(false);
  const items = [
    {
      icon: VideocamIcon,
      text: "ビデオ"
    },

    {
      icon: CategoryIcon,
      text: "カテゴリ"
    },
    {
      icon: GifIcon,
      text: "Gif動画"
    },
    {
      icon: EmojiPeopleIcon,
      text: "AV女優"
    },
    {
      icon: PeopleIcon,
      text: "ゲイ"
    }
  ];
  return (
    <div className="footer">
      <div className="footer__items">
        {items.map(e => (
          <Button className="footer__item" key={e.text}>
            <e.icon fontSize="large" className="footer__icon" />
            <p style={{ color: "lightgray", fontSize: 12 }}>{e.text}</p>
          </Button>
        ))}
      </div>
      <Divider style={{ backgroundColor: "gray" }} />
      {textToogle ? (
        <div className="footer__description">
          <p>
            Pornhubチームは、毎日エロ動画をアップデートしています。全てがそろった100%無料エロ動画集。自由にダウンロードできる膨大な無料エロDVDセレクション。Pornhubは最も完璧かつ革新的なエロ動画チューブサイトです。ストリーミング・エロ動画・ビデオ、ダウンロード可能なエロDVD、フォトアルバム、そして、ネット上でNo.1の無料セックスコミュニティー。刺激的でよりよいエロ動画生活がおくれるよう、私たちは常に新機能を追加しています。いつでも質問やコメントを送ってください。
            <button onClick={() => setTextToggle(false)}>
              表示件数を減らす
            </button>
          </p>
        </div>
      ) : (
        <div className="footer__description">
          <p>
            Pornhubチームは、毎日エロ動画をアップデートしています。全てがそろった100%無料エロ動画集。自由にダウンロードできる膨大な無料エロDVDセレクション。Pornhubは最も完璧かつ革新的なエロ動画チューブサイトです。ストリーミン...
            <button onClick={() => setTextToggle(true)}>もっと見る</button>
          </p>
        </div>
      )}
      <Divider style={{ backgroundColor: "gray" }} />
      <div className="footer__snsIcons">
        {[
          { icon: TwitterIcon },
          { icon: InstagramIcon },
          { icon: YouTubeIcon },
          { icon: RedditIcon },
          { icon: ChatBubbleIcon }
        ].map(e => (
          <Button>
            <e.icon style={{ color: "lightgray" }} fontSize="large" />
          </Button>
        ))}
      </div>
      <Divider style={{ backgroundColor: "gray" }} />
      <div className="footer__devise">
        {[
          { icon: ComputerIcon, text: "デスクトップ" },
          { icon: TabletMacIcon, text: "タブレット" }
        ].map(e => (
          <Button>
            <e.icon style={{ color: "lightgray" }} />
            <p style={{ color: "white", marginLeft: 8 }}>{e.text}</p>
          </Button>
        ))}
      </div>
      <p className="footer__copyRight">©Pornhub-clone, 2020</p>
    </div>
  );
}

export default Footer;
