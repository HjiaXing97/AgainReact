import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper, ScrollCount } from "./style";

const ScrollView = memo((props) => {
  const scrollRef = useRef();

  const [showRightBtn, setShowRightBtn] = useState(false);
  const [posIndex, setPosIndex] = useState(0);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth; //元素的实际宽度
    const clientWidth = scrollRef.current.clientWidth; //可视区域的宽度
    const totalDance = scrollWidth - clientWidth;
    setShowRightBtn(totalDance > 0);
  }, [props.children]);

  function rightBtnHandle() {
    const newIndex = posIndex + 1;
    const childEl = scrollRef.current.children[newIndex];
    scrollRef.current.style.transform = `translate(-${childEl.offsetLeft}px)`;
  }
  return (
    <ViewWrapper>
      <div className="left-but">left-but</div>
      {showRightBtn && (
        <div className="right-but" onClick={rightBtnHandle}>
          right-but
        </div>
      )}
      <ScrollCount ref={scrollRef}>{props.children}</ScrollCount>
    </ViewWrapper>
  );
});

export default ScrollView;
