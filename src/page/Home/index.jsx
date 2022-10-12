import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGoodPriceData } from "src/store/modules/home";
import HomeBanner from "./components/HomeBanner";
import HomeSection from "./components/HomeSection";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
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
      <HomeSection infoData={goodPriceInfo} />
      <HomeSection infoData={highScoreInfo} />
    </HomeWrapper>
  );
});

export default Home;
