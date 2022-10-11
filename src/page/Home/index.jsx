import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "src/components/RoomItem";
import SectionHeader from "src/components/SectionHeader";
import { fetchGoodPriceData } from "src/store/modules/home";
import HomeBanner from "./components/HomeBanner";
import { AllRoom, Count, HomeWrapper } from "./style";

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
        <AllRoom>
          {goodPriceInfo?.list?.slice(0, 8).map((node) => {
            return <RoomItem key={node.id} roomItem={node}></RoomItem>;
          })}
        </AllRoom>
      </Count>
    </HomeWrapper>
  );
});

export default Home;
