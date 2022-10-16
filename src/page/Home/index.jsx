import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SectionHeader from "src/components/SectionHeader";
import SectionRooms from "src/components/SectionRooms";
import { fetchGoodPriceData } from "src/store/modules/home";
import HomeBanner from "./components/HomeBanner";
import HomeSection from "./components/HomeSection";
import { Discount, HomeWrapper } from "./style";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
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
      <Discount>
        <SectionHeader
          title={discountInfo.title}
          subtitle={discountInfo.subtitle}
        ></SectionHeader>
        <SectionRooms
          goodPriceInfo={discountInfo?.dest_list?.["佛山"]}
          itemWidth={"33.33%"}
        ></SectionRooms>
      </Discount>
      <HomeSection infoData={goodPriceInfo} />
      <HomeSection infoData={goodPriceInfo} />
      <HomeSection infoData={highScoreInfo} />
    </HomeWrapper>
  );
});

export default Home;
