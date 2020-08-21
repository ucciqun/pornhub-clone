import React from "react";
import "./SignOut.css";
import app from "./firebase";
import { Button } from "@material-ui/core";

function SignOut() {
  return (
    <div>
      <h1>SIGN OUT HERE!</h1>
      <Button onClick={() => app.auth().signOut()}>Sign Out</Button>
    </div>
  );
}

export default SignOut;
