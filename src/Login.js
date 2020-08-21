import React, { useContext, useCallback } from "react";
import "./Login.css";
import app from "firebase";
import { AuthContext } from "./AuthProvider";
import { Redirect, withRouter } from "react-router-dom";

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
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default withRouter(Login);
