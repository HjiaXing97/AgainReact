import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: ${(props) => props.color};
  .info {
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
  .iconfont {
    margin-left: 6px;
    font-size: 20px;
  }
`;
