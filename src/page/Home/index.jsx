import {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchGoodPriceData} from "src/store/modules/home";
import HomeBanner from "./components/HomeBanner";
import HomeSection from "./components/HomeSection";
import {HomeWrapper} from "./style";
import HomeSectionV2 from "page//Home/components/HomeSectionV2";
import isEmptyObject from "utils/isEmptyObject";

const Home = memo(() => {
	const {goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo} = useSelector(
			(state) => ({
				goodPriceInfo: state.home.goodPriceInfo,
				highScoreInfo: state.home.highScoreInfo,
				discountInfo: state.home.discountInfo,
				hotRecommendInfo: state.home.hotRecommendInfo
			}),
			shallowEqual
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGoodPriceData());
	}, [dispatch]);

	return (
			<HomeWrapper>
				<HomeBanner/>

				{isEmptyObject(discountInfo) && (
						<HomeSectionV2 infoData={discountInfo}></HomeSectionV2>
				)}

				{isEmptyObject(hotRecommendInfo) && (
						<HomeSectionV2 infoData={hotRecommendInfo}></HomeSectionV2>
				)}

				<HomeSection infoData={goodPriceInfo}/>
				<HomeSection infoData={highScoreInfo}/>
			</HomeWrapper>
	);
});

export default Home;
