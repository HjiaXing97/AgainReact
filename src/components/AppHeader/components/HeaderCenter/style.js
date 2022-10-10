import styled from "styled-components";

export const CenterWrapper = styled.div``;
export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  box-sizing: border-box;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  ${(props) => props.theme.mixin.boxShadow}
`;
export const Text = styled.div`
  padding: 0 16px;
  color: #222;
  font-weight: 600;
`;
export const Icon = styled.i`
  &.iconfont {
    width: 32px;
    height: 32px;
    border-radius: 50px;
    color: #fff;
    background-color: var(--primary-color);
    text-align: center;
    line-height: 32px;
  }
`;
