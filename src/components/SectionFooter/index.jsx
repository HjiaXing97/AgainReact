import React, { memo } from "react";
import { FooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;

  let showMessage = "显示全部";

  if (name) {
    showMessage = `显示更多${name}房源`;
  }
  return (
    <FooterWrapper color={name ? "#00848a" : "#000"}>
      <div className="info">{showMessage}</div>
      <i className="iconfont">&#xe6d6;</i>
    </FooterWrapper>
  );
});

export default SectionFooter;
