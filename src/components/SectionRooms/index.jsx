import { memo } from "react";
import RoomItem from "src/components/RoomItem";
import { AllRoom } from "./style.js";

const SectionRooms = memo((props) => {
  const { goodPriceInfo } = props;
  return (
    <AllRoom>
      {goodPriceInfo?.map((node) => {
        return <RoomItem key={node.id} roomItem={node}></RoomItem>;
      })}
    </AllRoom>
  );
});

export default SectionRooms;
