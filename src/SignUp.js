import React, { useCallback, useState } from "react";
import "./SignUp.css";
import app from "./firebase";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function SignUp({ history }) {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordComfirm] = useState("");
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div className="signup">
      <h1>無料登録</h1>
      <p className="signup__subtitle">より刺激的なXXXライフを体験しよう！</p>
      <form onSubmit={handleSignUp} className="signup__form" autoComplete="off">
        <label>
          <input
            type="email"
            name="email"
            placeholder="メールアドレス(6文字以上)"
            className="signup__input"
            autoComplete="off"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="パスワード(6文字以上)"
            className="signup__input"
            value={password}
            onChange={event => setPassword(event.target.value)}
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="パスワードを確認"
            className="signup__input"
            value={passwordConfirm}
            onChange={event => setPasswordComfirm(event.target.value)}
            autoComplete="off"
          />
        </label>
        {password !== passwordConfirm && (
          <p style={{ color: "red", fontSize: 12 }}>
            ERROR パスワードが一致しません。
          </p>
        )}
        {password === passwordConfirm ? (
          <Button type="submit" className="signup__submit">
            メンバーになる！
          </Button>
        ) : (
          <Button className="signup__submit">ERROR!</Button>
        )}
      </form>
      <div className="signup__loginContainer">
        <p style={{ color: "lightgray"}}>または</p>
        <Button
          className="signup__login"
          onClick={() => history.push("./login")}
        >
          ログイン
        </Button>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
