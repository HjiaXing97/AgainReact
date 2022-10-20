import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  .scroll {
    overflow: hidden;
  }
  .iconfont {
    cursor: pointer;
    font-size: 20px;
  }
`;

export const ScrollCount = styled.div`
  display: flex;
  transition: transform 300ms ease;
`;

export const ScrollBut = styled.div`
  position: absolute;
  height: 28px;
  width: 28px;
  top: 50%;
  transform: translate(0, -50%);
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  border-radius: 50%;
  text-align: center;
  border-width: 2px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.14);
  &.right-but {
    right: 0;
    transform: translate(50%, -50%);
  }
  &.left-but {
    left: 0;
    transform: translate(-50%, -50%);
  }
`;
