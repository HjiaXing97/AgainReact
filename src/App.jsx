import React, { Component } from "react";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Banners from "./page/Banners";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <br />
        <Profile />
        <br />
        <Banners />
      </div>
    );
  }
}

export default App;
