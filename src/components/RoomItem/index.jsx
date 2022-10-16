import { Rating } from "@mui/material";
import { memo } from "react";
import {
  BottomInfo,
  Cover,
  Desc,
  Inner,
  ItemWrapper,
  Name,
  Price,
  RoomRating,
} from "./style";
const RoomItem = memo((props) => {
  const { roomItem, itemWidth = "25%" } = props;

  return (
    <ItemWrapper itemWidth={itemWidth}>
      <Inner>
        <Cover>
          <img src={roomItem.picture_url} alt="" />
        </Cover>
        <Desc textColor={roomItem?.verify_info.text_color || " #39576a"}>
          {roomItem?.verify_info?.messages?.join(" * ")}
        </Desc>
        <Name>{roomItem.name}</Name>
        <Price>￥{roomItem.price}/晚</Price>
        <RoomRating>
          <Rating
            value={roomItem.star_rating ?? 5}
            readOnly
            size="small"
            precision={0.2}
            sx={{ fontSize: "12px", color: "#00848a" }}
          ></Rating>
          <span className="reviews_count">{roomItem.reviews_count}</span>
          <BottomInfo
            textColor={roomItem?.bottom_info?.content_color}
            fontSize={roomItem?.bottom_info?.font_size}
          >
            {roomItem?.bottom_info?.content}
          </BottomInfo>
        </RoomRating>
      </Inner>
    </ItemWrapper>
  );
});

export default RoomItem;
