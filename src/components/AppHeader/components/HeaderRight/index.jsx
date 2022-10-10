import { memo, useEffect, useState } from "react";
import {
  BthList,
  BtnItem,
  Icon,
  Panel,
  Profile,
  RightWrapper,
  UserIcon,
} from "./style";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  function profileClickHandle(e) {
    setShowPanel(true);
  }
  function closePanel() {
    setShowPanel(false);
  }

  /** 监听全局的点击事件，关闭 Panel*/
  useEffect(() => {
    window.addEventListener("click", closePanel, true);
    //取消监听
    return () => {
      window.removeEventListener("click", closePanel);
    };
  }, []);
  return (
    <RightWrapper>
      <BthList>
        <BtnItem>登录</BtnItem>
        <BtnItem>注册</BtnItem>
        <BtnItem>
          <Icon className="iconfont">&#xe62d;</Icon>
        </BtnItem>
        <Profile>
          <Icon className="iconfont" onClick={(e) => profileClickHandle(e)}>
            &#xe643;
          </Icon>
          <UserIcon className="iconfont">&#xe787;</UserIcon>
          {showPanel && (
            <Panel>
              <div className="top">
                <span>注册</span>
                <span>登录</span>
              </div>
              <div className="bottom">
                <span>出租房源</span>
                <span>开展体验</span>
                <span>帮助</span>
              </div>
            </Panel>
          )}
        </Profile>
      </BthList>
    </RightWrapper>
  );
});

export default HeaderRight;
