import SectionRooms from "components/SectionRooms";
import { memo } from "react";
import SectionHeader from "src/components/SectionHeader";
import { SectionWrapper } from "./style";
import SectionFooter from "components/SectionFooter";

const HomeSection = memo((props) => {
  const { infoData } = props;
  return (
    <SectionWrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionRooms
        goodPriceInfo={infoData?.list?.slice(0, 8)}
        itemWidth={"25%"}
      />
      <SectionFooter />
    </SectionWrapper>
  );
});

export default HomeSection;
