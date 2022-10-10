import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const BthList = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnItem = styled.span`
  cursor: pointer;
  height: 18px;
  line-height: 18px;
  padding: 12px 15px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary-color);
  border-radius: 30px;

  &:hover {
    background-color: #f5f5f5;
  }
  .iconfont {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Icon = styled.i``;

export const UserIcon = styled.i`
  &.iconfont {
    height: 30px;
    width: 30px;
    background-color: var(--fo-jk-r-s);
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    color: #fff;
  }
`;

export const Profile = styled.div`
  cursor: pointer;
  display: flex;
  width: 77px;
  height: 42px;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: #fff;
  margin-left: 24px;
  ${(props) => props.theme.mixin.boxShadow}
  position: relative;
`;

export const Panel = styled.div`
  position: absolute;
  width: 240px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  right: 0;
  top: 60px;
  border-radius: 10px;
  .top,
  .bottom {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
  }
  span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .top {
    border-bottom: 1px solid #eee;
  }
`;
