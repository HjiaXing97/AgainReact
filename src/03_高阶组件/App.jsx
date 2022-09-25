import React, { Component } from "react";
import Home from "./Home";
import ThemeContext from "./theme_context";

class App extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: "red", size: 30 }}>
          <Home />
        </ThemeContext.Provider>
      </div>
      // <ThemeContext.Provide value={{ color: "red", size: 30 }}>
      //   <Home />
      // </ThemeContext.Provide>
    );
  }
}

export default App;
