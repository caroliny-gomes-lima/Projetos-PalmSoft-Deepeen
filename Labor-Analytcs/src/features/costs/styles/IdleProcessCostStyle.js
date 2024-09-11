import styled from "styled-components";
import { FontStyles } from "../../../components";

const ItemText = styled.div(({ theme }) => ({
  ...FontStyles.roman12,
  color: theme.palette.text.primary,
  padding: theme.spacing(0, 0, 0, 10),
}));

const Content = styled.div((props) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const ChartAndText = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: spacing(1, 0, 1, 0),
  };
});

const GraphContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    padding: spacing(0, 1, 0, 0),
  };
});

const DescriptionContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    padding: spacing(0, 1, 0, 0),
    marginTop: "auto",
  };
});

const Styles = {
  ItemText,
  Content,
  ChartAndText,
  GraphContainer,
  DescriptionContainer,
};

export default Styles;
