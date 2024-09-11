import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { ChartsColors, MediaQueries } from "../../../config";
import { FontStyles } from "../../../components";

const colors = ChartsColors.orderingProductivity;

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  flex: 1,
  overflowY: "auto",
}));

const ColumnTitle = styled.div((props) => ({
  ...FontStyles.medium14,
  textTransform: "uppercase",
  opacity: 88,
}));

const ItemText = styled.div(({ theme }) => ({
  ...FontStyles.roman12,
  color: theme.palette.text.primary,
}));

const GridData = styled(Grid)(({ theme, $isOdd }) => {
  const { spacing } = theme;
  return {
    backgroundColor: $isOdd ? colors.backgroundColor1 : colors.backgroundColor2,
    padding: spacing(1),
  };
});

const Content = styled.div((props) => ({
  [MediaQueries.lgDown]: {
    minWidth: 1000,
    overflowX: "auto",
  },
}));

const ChartText = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
}));

const GraphContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "70%",
    padding: spacing(0, 1, 0, 0),
  };
});

const Styles = {
  ColumnTitle,
  ItemText,
  GridData,
  Container,
  Content,
  ChartText,
  GraphContainer,
};

export default Styles;
