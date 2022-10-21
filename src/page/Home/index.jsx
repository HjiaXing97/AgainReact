import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";

import { fetchGoodPriceData } from "src/store/modules/home";
import HomeBanner from "./components/HomeBanner";
import HomeSection from "./components/HomeSection";
import HomeLongFor from "./components/HomeLongFor";
import HomeSectionV2 from "./components/HomeSectionV2";

import isEmptyObject from "utils/isEmptyObject";

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longForInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longForInfo: state.home.longForInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoodPriceData());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      {isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo} />}

      {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}

      {isEmptyObject(hotRecommendInfo) && (
        <HomeSectionV2 infoData={hotRecommendInfo} />
      )}

      <HomeSection infoData={goodPriceInfo} />
      <HomeSection infoData={highScoreInfo} />
    </HomeWrapper>
  );
});

export default Home;
