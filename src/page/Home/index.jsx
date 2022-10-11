import SectionRooms from "components/SectionRooms";
import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SectionHeader from "src/components/SectionHeader";
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
      <Count>
        <SectionHeader title={goodPriceInfo.title}></SectionHeader>
        <SectionRooms
          goodPriceInfo={goodPriceInfo?.list?.slice(0, 8)}
        ></SectionRooms>
      </Count>
    </HomeWrapper>
  );
});

export default Home;
