import { memo } from "react";
import HomeBanner from "./components/HomeBanner";
import { HomeWrapper } from "./style";
const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
    </HomeWrapper>
  );
});

export default Home;
