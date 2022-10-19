import classNames from "classnames";
import { memo, useState } from "react";
import { TabsItem, TabsWrappers } from "./style.js";
import ScrollView from "src/base-ui/ScrollView";

const SectionTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { tabNames = [], tabClickHandle } = props;

  function itemClick(index, item) {
    setCurrentIndex(index);
    tabClickHandle(index, item);
  }

  return (
    <TabsWrappers>
      <ScrollView>
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
      </ScrollView>
    </TabsWrappers>
  );
});

export default SectionTabs;
