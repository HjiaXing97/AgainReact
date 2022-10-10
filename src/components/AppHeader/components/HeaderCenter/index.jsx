import { memo } from "react";
import { CenterWrapper, Icon, SearchBar, Text } from "./style";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <SearchBar>
        <Text>搜索房源和体验</Text>
        <Icon className="iconfont">&#xe8b9;</Icon>
      </SearchBar>
    </CenterWrapper>
  );
});

export default HeaderCenter;
