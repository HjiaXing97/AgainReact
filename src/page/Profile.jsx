import React, { Component } from "react";
import { connect } from "react-redux";
import { subNumber } from "../store/modules/counter";

class Profile extends Component {
  subNumber(num) {
    this.props.subNumber(num);
  }

  render() {
    const { count } = this.props;
    return (
      <>
        <div>Profile Page</div>
        <p>{count}</p>
        <button onClick={(e) => this.subNumber(6)}>+6</button>
        <button onClick={(e) => this.subNumber(12)}>+12</button>
        <button onClick={(e) => this.subNumber(18)}>+18</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});
const mapDispatchToProps = (dispatch) => ({
  subNumber(num) {
    dispatch(subNumber(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
