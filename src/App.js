import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Feed from "./Feed";
import Login from "./Login";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import Footer from "./Footer";
import { AuthProvider } from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";

function App() {
  const Home = <div></div>;
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* <h1>REACT PORNHUB-CLONE</h1> */}
          {/*Header*/}
          <Header />
          {/*Feed*/}
          <Route exact path="/" component={Feed} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/signout" component={SignOut} />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
