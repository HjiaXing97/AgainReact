import React, { memo } from "react";
import { LongForWrapper, LongCount } from "./style";
import SectionHeader from "components/SectionHeader";
import LongForItem from "components/LongForItem";
import ScrollView from "src/base-ui/ScrollView";

const HomeLongFor = memo((props) => {
  const { infoData } = props;

  return (
    <LongForWrapper>
      <SectionHeader
        title={infoData?.title}
        subTitle={infoData?.subtitle}
      ></SectionHeader>
      <LongCount>
        <ScrollView>
          {infoData.list.map((node, index) => {
            return (
              <LongForItem key={index.toString()} longItem={node}></LongForItem>
            );
          })}
        </ScrollView>
      </LongCount>
    </LongForWrapper>
  );
});

export default HomeLongFor;
