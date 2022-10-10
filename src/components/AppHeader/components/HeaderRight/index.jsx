import { memo } from "react";
import {
  BthList,
  BtnItem,
  Icon,
  Profile,
  RightWrapper,
  UserIcon,
} from "./style";

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <BthList>
        <BtnItem>登录</BtnItem>
        <BtnItem>注册</BtnItem>
        <BtnItem>
          <Icon className="iconfont">&#xe62d;</Icon>
        </BtnItem>
        <Profile>
          <Icon className="iconfont">&#xe643;</Icon>
          <UserIcon className="iconfont">&#xe787;</UserIcon>
        </Profile>
      </BthList>
    </RightWrapper>
  );
});

export default HeaderRight;
