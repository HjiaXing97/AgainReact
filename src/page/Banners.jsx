import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHomeMultiDataAction } from "../store/modules/home";

class Banners extends Component {
  componentDidMount() {
    this.props.fetchHomeMultiData();
  }

  render() {
    const { banners, recommends } = this.props;
    return (
      <div>
        <p>Banners page</p>
        <ul>
          {banners.map((item) => {
            return <li key={item.title}>{item.title}</li>;
          })}
        </ul>
        <ul>
          {recommends.map((item) => {
            return <li key={item.title}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  banners: state.home.banners,
  recommends: state.home.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultiData() {
    dispatch(fetchHomeMultiDataAction());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Banners);
