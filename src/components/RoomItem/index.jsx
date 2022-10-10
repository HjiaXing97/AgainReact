import { memo } from "react";
import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { roomItem } = props;
  return <ItemWrapper>{roomItem.name}</ItemWrapper>;
});

export default RoomItem;
