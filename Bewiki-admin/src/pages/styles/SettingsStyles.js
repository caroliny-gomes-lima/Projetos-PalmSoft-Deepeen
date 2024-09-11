import styled from "styled-components";
import { defaultContainerStyles, sizes } from "./defaultStyles";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    ...defaultContainerStyles(spacing),
    gridTemplateColumns: `${sizes.pageContent}px 1fr`,
    overFlowY: "auto",
    minHeight: "50%",
  };
});

const Styles = {
  Container,
};

export default Styles;
