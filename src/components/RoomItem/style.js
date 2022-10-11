import styled from "styled-components";

export const ItemWrapper = styled.li`
  width: 25%;
  padding: 0 8px;
  box-sizing: border-box;
  margin-top: 12px;
`;

export const Inner = styled.div`
  width: 100%;
`;

export const Cover = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 66.66% 8px 0;
  border-radius: 3px;
  overflow: hidden;
  img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
`;

export const Desc = styled.div`
  margin: 10px 0 5px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.textColor};
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #484848;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 25px;
`;

export const Price = styled.div`
  font-size: 12px;
  line-height: 25px;
`;

export const RoomRating = styled.div`
  display: flex;
  align-items: center;
  .reviews_count {
    padding: 0 8px;
    font-size: 12px;
  }
  .MuiRating-icon {
    margin-right: -1px;
  }
`;

export const BottomInfo = styled.span`
  color: ${(props) => props.textColor};
  font-size: 12px;
`;
