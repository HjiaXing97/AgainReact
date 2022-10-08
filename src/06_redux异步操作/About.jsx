import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBannersActions } from "../store/feature/about/actionCreators";

class About extends Component {
  componentDidMount() {
    this.props.fetchBanners();
  }

  render() {
    const { banners, recommends } = this.props;
    return (
      <div>
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

// const mapStoreToProps = (state) => ({
//   banners: state.about.banners,
//   recommends: state.about.recommends,
// });
const mapStoreToProps = (state) => {
  return {
    banners: state.about.banners,
    recommends: state.about.recommends,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchBanners() {
    dispatch(fetchBannersActions());
  },
});

export default connect(mapStoreToProps, mapDispatchToProps)(About);
