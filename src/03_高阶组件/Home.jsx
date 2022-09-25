import React, { Component } from "react";
import withTheme from "./hocTheme";

class Home extends Component {
  render() {
    return <div>color={this.props.color}</div>;
  }
}

export default withTheme(Home);
