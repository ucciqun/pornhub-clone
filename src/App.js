import React from "react";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <h1>REACT PORNHUB-CLONE</h1>
      {/*Header*/}
      <Header />
      {/*Feed*/}
      <Feed />
      {/* Video */}
      <Video />
    </div>
  );
}

export default App;
