import styled from "styled-components";
import { defaultContainerStyles, sizes } from "./defaultStyles";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    ...defaultContainerStyles(spacing),
    gridTemplateColumns: `1fr 1fr 1fr ${sizes.pageContent}px`,
  };
});

const Styles = {
  Container,
};

export default Styles;
