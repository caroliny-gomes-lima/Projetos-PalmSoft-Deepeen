import styled from "styled-components";
import {
  defaultContainerStyles,
  sizes,
  Content as DefaultContent,
} from "./defaultStyles";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    ...defaultContainerStyles(spacing),
    gridTemplateColumns: `${sizes.pageContent}px 1fr 1fr 1fr`,
  };
});

const Content = styled(DefaultContent)(() => ({
  maxHeight: 800,
}));

const Styles = {
  Container,
  Content,
};

export default Styles;
