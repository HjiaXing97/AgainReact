import { memo } from "react";
import RoomItem from "src/components/RoomItem";
import { AllRoom } from "./style.js";

const SectionRooms = memo((props) => {
  const { goodPriceInfo, itemWidth } = props;
  return (
    <AllRoom>
      {goodPriceInfo?.map((node) => {
        return (
          <RoomItem
            key={node.id}
            itemWidth={itemWidth}
            roomItem={node}
          ></RoomItem>
        );
      })}
    </AllRoom>
  );
});

export default SectionRooms;
