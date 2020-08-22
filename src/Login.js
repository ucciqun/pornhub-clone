import React, { useContext, useCallback } from "react";
import "./Login.css";
import app from "firebase";
import { AuthContext } from "./AuthProvider";
import { Redirect, withRouter } from "react-router-dom";

import { Button } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ForumIcon from "@material-ui/icons/Forum";
import GetAppIcon from "@material-ui/icons/GetApp";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ListIcon from "@material-ui/icons/List";

function Login({ history }) {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log(currentUser);
    return <Redirect to="/signout" />;
  }

  const items = [
    {
      icon: PublishIcon,
      text: "動画をアップロード"
    },
    {
      icon: PersonAddIcon,
      text: "友人を追加"
    },
    {
      icon: ForumIcon,
      text: "コメントを投稿"
    },
    {
      icon: GetAppIcon,
      text: "コメントを投稿"
    },
    {
      icon: RssFeedIcon,
      text: "チャンネルを購読する"
    },
    {
      icon: ListIcon,
      text: "プレイリストを作成"
    }
  ];
  return (
    <div className="login">
      <h1>会員ログイン</h1>
      <p className="login__subtitle">
        Pornhub、またはPornhubプレミアムアカウントへログインします
      </p>
      <form onSubmit={handleLogin} className="login__form" autoComplete="on">
        <label>
          <input
            name="email"
            type="email"
            placeholder="メールアドレス(6文字以上)"
            className="login__input"
          />
        </label>
        <label>
          <input
            name="password"
            type="password"
            placeholder="パスワード(6文字以上)"
            className="login__input"
          />
        </label>
        <Button type="submit" className="login__submit">
          ログイン
        </Button>
      </form>
      <p className="login__forget">
        ユーザー名またはパスワードをお忘れですか？
      </p>
      <h2>まだ会員ではありませんか？</h2>
      <p className="login__subtitle">
        メンバーになったらこんなことができるよ！
      </p>
      <div className="login__list">
        <div className="login__list-left">
          {items.map(
            (e, index) =>
              index % 2 === 0 && (
                <div key={index} className="login__item">
                  <e.icon />
                  <p>{e.text}</p>
                </div>
              )
          )}
        </div>
        <div className="login__list-right">
          {items.map(
            (e, index) =>
              index % 2 === 1 && (
                <div key={index} className="login__item">
                  <e.icon />
                  <p>{e.text}</p>
                </div>
              )
          )}
        </div>
      </div>
      <Button
        className="login__signup"
        fullWidth
        onClick={() => history.push("./signup")}
      >
        会員登録
      </Button>
    </div>
  );
}

export default withRouter(Login);
