import React, { Component } from "react";
import Home from "./page/Home";
import Profile from "./page/Profile";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <br />
        <Profile />
      </div>
    );
  }
}

export default App;
