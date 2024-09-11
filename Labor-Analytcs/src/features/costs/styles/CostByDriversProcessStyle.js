import styled from "styled-components";
import { FontStyles } from "../../../components";

const Graph = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "#2C3E50",
  borderRadius: 5,
  padding: 5,
  marginBottom: theme.spacing(1),
}));

const Title = styled.p(({ theme }) => ({
  ...FontStyles.medium14,
  color: theme.palette.text.primary,
  margin: 0,
}));

const GraphText = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
  };
});
const DescriptionGroup = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});

const GraphContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "50%",
    padding: spacing(0, 1, 0, 0),
  };
});

const Styles = {
  Graph,
  Title,
  GraphContainer,
  GraphText,
  DescriptionGroup,
};

export default Styles;
