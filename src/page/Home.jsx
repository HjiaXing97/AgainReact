import React, { Component } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/modules/counter";

class Home extends Component {
  addNumber(num) {
    this.props.addNumber(num);
  }

  render() {
    const { count } = this.props;
    return (
      <>
        <div>Home Page</div>
        <p>{count}</p>
        <div>
          <button onClick={(e) => this.addNumber(6)}>+6</button>
          <button onClick={(e) => this.addNumber(12)}>+12</button>
          <button onClick={(e) => this.addNumber(18)}>+18</button>
        </div>
      </>
    );
  }
}

const mapStoreToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
});
export default connect(mapStoreToProps, mapDispatchToProps)(Home);
