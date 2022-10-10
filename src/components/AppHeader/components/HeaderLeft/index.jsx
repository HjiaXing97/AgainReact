import { memo } from "react";
import { Icon, LeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <Icon className="iconfont">&#xe618;</Icon>
    </LeftWrapper>
  );
});

export default HeaderLeft;
