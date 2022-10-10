import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGoodPriceData } from "src/store/modules/home";
import HomeBanner from "./components/HomeBanner";
import { Count, HomeWrapper } from "./style";

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoodPriceData());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <Count>{goodPriceInfo.title}</Count>
    </HomeWrapper>
  );
});

export default Home;
