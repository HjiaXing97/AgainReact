import React, { memo, useCallback, useEffect, useState } from "react";
import { SectionWrapper } from "./style";
import SectionHeader from "components/SectionHeader";
import SectionRooms from "components/SectionRooms";
import SectionTabs from "components/SectionTabs";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? "";
  const [tabNameArr, setTabNameArr] = useState([]);
  const [tabName, setTabName] = useState(initialName);

  useEffect(() => {
    const arr = infoData?.dest_address?.map((node) => node.name);
    setTabNameArr(arr);
  }, [infoData]);

  const tabClickHandle = useCallback(function (index, name) {
    setTabName(name);
  }, []);

  return (
    <SectionWrapper>
      <SectionHeader
        title={infoData.title}
        subTitle={infoData.subtitle}
      ></SectionHeader>
      <SectionTabs
        tabNames={tabNameArr}
        tabClickHandle={tabClickHandle}
      ></SectionTabs>
      <SectionRooms
        goodPriceInfo={infoData?.dest_list?.[tabName]}
        itemWidth={"33.33%"}
      ></SectionRooms>
    </SectionWrapper>
  );
});

export default HomeSectionV2;
