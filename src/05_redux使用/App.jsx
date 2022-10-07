import React, { Component } from "react";
import store from "../store";
import { addNumActions, subNumActions } from "../store/actionCreators";
import About from "./About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ ...store.getState() });
    });
  }

  addNumber(num) {
    store.dispatch(addNumActions(num));
  }

  subNumber(num) {
    store.dispatch(subNumActions(num));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>App</p>
        <div>{counter}</div>
        <div>
          <button onClick={() => this.addNumber(1)}>+1</button>
          <button onClick={() => this.addNumber(5)}>+5</button>
          <button onClick={() => this.addNumber(10)}>+10</button>
        </div>
        <div>
          <button onClick={() => this.subNumber(1)}>-1</button>
          <button onClick={() => this.subNumber(5)}>-5</button>
          <button onClick={() => this.subNumber(10)}>-10</button>
        </div>
        <About />
      </div>
    );
  }
}

export default App;
