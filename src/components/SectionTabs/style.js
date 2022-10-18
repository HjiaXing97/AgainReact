import styled from "styled-components";

export const TabsWrappers = styled.div`
  display: flex;
`;
export const TabsItem = styled.div`
  box-sizing: border-box;
  flex-basis: 120px;
  flex-shrink: 0;
  padding: 14px 16px;
  margin-right: 16px;
  font-size: 17px;
  text-align: center;
  border: 0.5px solid #d8d8d8;
  white-space: nowrap;
  cursor: pointer;
  ${(props) => props.theme.mixin.boxShadow};

  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #fff;
    background-color: ${(props) => props.theme.color.secondaryColor};
  }
`;
