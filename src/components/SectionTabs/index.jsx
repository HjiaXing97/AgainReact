import classNames from "classnames";
import { memo, useState } from "react";
import { TabsItem, TabsWrappers } from "./style.js";

const SectionTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { tabNames = [], tabClickHandle } = props;

  function itemClick(index, item) {
    setCurrentIndex(index);
    tabClickHandle(index, item);
  }

  return (
    <TabsWrappers>
      {tabNames.map((node, index) => {
        return (
          <TabsItem
            className={classNames({ active: currentIndex === index })}
            key={index.toString()}
            onClick={() => itemClick(index, node)}
          >
            {node}
          </TabsItem>
        );
      })}
    </TabsWrappers>
  );
});

export default SectionTabs;
