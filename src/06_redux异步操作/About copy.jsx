import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  changeBannersActions,
  changeRecommendsActions,
} from "../store/actionCreators";

class About extends Component {
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const data = res.data.data;
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    });
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

const mapStoreToProps = (state) => ({
  banners: state.banners,
  recommends: state.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBannersActions(banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendsActions(recommends));
  },
});

export default connect(mapStoreToProps, mapDispatchToProps)(About);
