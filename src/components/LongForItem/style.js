import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
`;

export const Inner = styled.div`
  position: relative;
  padding: 8px;
`;
export const Cover = styled.img`
  width: 100%;
`;

export const BgCover = styled.div`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 60%;
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 3%,
    rgba(0, 0, 0) 100%
  );
`;

export const Info = styled.div`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px 32px;
  color: #fff;
  .city {
    font-size: 18px;
    font-weight: 600;
  }
  .price {
    font-size: 14px;
    margin-top: 5px;
  }
`;
