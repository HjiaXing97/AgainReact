import { memo } from "react";
import { ItemWrapper, Inner, Cover, BgCover, Info } from "./style";

const LongForItem = memo((props) => {
  const { longItem } = props;
  return (
    <ItemWrapper>
      <Inner>
        <Cover src={longItem.picture_url} alt="" />
        <BgCover></BgCover>
        <Info>
          <p className={"city"}>{longItem.city}</p>
          <p className={"price"}>均价：{longItem.price}</p>
        </Info>
      </Inner>
    </ItemWrapper>
  );
});

export default LongForItem;
