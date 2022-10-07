import React, { Component } from "react";
import { connect } from "react-redux";
import { addNumActions, subNumActions } from "../store/actionCreators";

class About extends Component {
  calcNumber(num, type) {
    if (type) this.props.addNumber(num);
    else this.props.subNumber(num);
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <p>APP</p>
        <p>{counter}</p>
        <div>
          <button onClick={() => this.calcNumber(1, true)}>+1</button>
          <button onClick={() => this.calcNumber(5, true)}>+5</button>
          <button onClick={() => this.calcNumber(10, true)}>+10</button>
          <button onClick={() => this.calcNumber(1, false)}>-1</button>
          <button onClick={() => this.calcNumber(5, false)}>-5</button>
          <button onClick={() => this.calcNumber(10, false)}>-10</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
    addNumber(num) {
        dispatch(addNumActions(num));
    },
    subNumber(num) {
        dispatch(subNumActions(num));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(About);
