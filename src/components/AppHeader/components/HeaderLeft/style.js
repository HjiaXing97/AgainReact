import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const Icon = styled.i`
  &.iconfont {
    font-size: 45px;
    /* color: var(--primary-color);   //使用css变量 */
    color: ${(props) =>
      props.theme.color
        .primaryColor}; //使用styled-components中的theme方式存入变量
    cursor: pointer;
  }
`;
