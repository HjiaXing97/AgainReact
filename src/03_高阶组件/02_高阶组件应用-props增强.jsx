import React, { Component } from "react";
import enhancedUser from "./enhancedUser";

const Home = enhancedUser(function (props) {
  return (
    <>
      <div>Home:{props.name}</div>
      <div>Home:{props.age}</div>
      <div>Home:{props.baner}</div>
    </>
  );
});

const OrderForm = enhancedUser(function (props) {
  return (
    <>
      <div>OrderForm:{props.name}</div>
      <div>OrderForm:{props.age}</div>
      <div>OrderForm:{props.info}</div>
    </>
  );
});

class App extends Component {
  render() {
    return (
      <div>
        <Home baner={[2, 2, 3, 4, 5, 5]} />
        <OrderForm info={["212", "sewew", "wqewui"]} />
      </div>
    );
  }
}

export default App;
