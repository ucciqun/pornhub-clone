import React, { useCallback } from "react";
import "./SignUp.css";
import app from "./firebase";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function SignUp({ history }) {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/signout");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          password
          <input type="password" name="password" placeholder="Password" />
          <Button type="submit">Sign Up</Button>
        </label>
      </form>
    </div>
  );
}

export default withRouter(SignUp);
