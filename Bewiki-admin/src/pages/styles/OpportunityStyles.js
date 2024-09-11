import styled from "styled-components";
import { defaultContainerStyles } from "./defaultStyles";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    ...defaultContainerStyles(spacing),
    gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`,
  };
});

const Styles = {
  Container,
};

export default Styles;
