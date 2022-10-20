import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper, ScrollCount, ScrollBut } from "./style";

const ScrollView = memo((props) => {
  const scrollRef = useRef();

  const [showRightBtn, setShowRightBtn] = useState(false); //是否展示右侧按钮
  const [showLeft, setShowLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0); //滚动index
  const [totalDance, setTotalDance] = useState(0);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth; //元素的实际宽度
    const clientWidth = scrollRef.current.clientWidth; //可视区域的宽度
    const totalDance = scrollWidth - clientWidth;
    setTotalDance(totalDance);
    setShowRightBtn(totalDance > 0);
  }, [props.children]);

  function controlClickHandle(isRight = true) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const childEl = scrollRef.current.children[newIndex];
    const newOffsetLeft = childEl.offsetLeft;
    scrollRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRightBtn(totalDance > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <ScrollBut
          className="left-but but"
          onClick={() => controlClickHandle(false)}
        >
          <i className="iconfont">&#xe602;</i>
        </ScrollBut>
      )}
      {showRightBtn && (
        <ScrollBut className="right-but but" onClick={controlClickHandle}>
          <i className="iconfont">&#xe60c;</i>
        </ScrollBut>
      )}
      <div className="scroll">
        <ScrollCount ref={scrollRef}>{props.children}</ScrollCount>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
