import PropTypes from "prop-types";
import { memo } from "react";
import { HeaderWrapper, SubTitle, Title } from "./style";

const SectionHeader = memo((props) => {
  const { title, subTitle } = props;
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </HeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
