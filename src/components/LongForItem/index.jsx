import { memo } from "react";
import { ItemWrapper, Cover, Count, Inner, BGCover } from "./style";

const LongForItem = memo((props) => {
  const { longItem } = props;
  return (
    <ItemWrapper>
      <Inner>
        <Cover src={longItem.picture_url}></Cover>
        <BGCover />
        <Count>
          <p className={"city"}>{longItem.city}</p>
          <p className={"price"}>均价：{longItem.price}</p>
        </Count>
      </Inner>
    </ItemWrapper>
  );
});

export default LongForItem;
