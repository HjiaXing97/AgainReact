import { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SectionHeader from "src/components/SectionHeader";
import SectionRooms from "src/components/SectionRooms";
import SectionTabs from "src/components/SectionTabs";
import { fetchGoodPriceData } from "src/store/modules/home";
import HomeBanner from "./components/HomeBanner";
import HomeSection from "./components/HomeSection";
import { Discount, HomeWrapper } from "./style";

const Home = memo(() => {
  const [tabNameArr, setTabNameArr] = useState([]);
  const [tabName, setTabName] = useState("佛山");

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

  useEffect(() => {
    const arr = discountInfo?.dest_address?.map((node) => node.name);
    setTabNameArr(arr);
  }, [discountInfo]);

  const tabClickHandle = useCallback(function (index, name) {
    setTabName(name);
  }, []);

  return (
    <HomeWrapper>
      <HomeBanner />
      <Discount>
        <SectionHeader
          title={discountInfo.title}
          subtitle={discountInfo.subtitle}
        ></SectionHeader>
        <SectionTabs
          tabNames={tabNameArr}
          tabClickHandle={tabClickHandle}
        ></SectionTabs>
        <SectionRooms
          goodPriceInfo={discountInfo?.dest_list?.[tabName]}
          itemWidth={"33.33%"}
        ></SectionRooms>
      </Discount>
      <HomeSection infoData={goodPriceInfo} />
      <HomeSection infoData={highScoreInfo} />
    </HomeWrapper>
  );
});

export default Home;
