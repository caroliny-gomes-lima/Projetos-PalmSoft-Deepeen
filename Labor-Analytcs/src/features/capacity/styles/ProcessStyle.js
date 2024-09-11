import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { MediaQueries } from "../../../config";
import { FontStyles } from "../../../components";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: spacing(1, 0),
    [MediaQueries.mdDown]: {
      overflow: "auto",
    },
  };
});

const GraphsContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: theme.palette.colors.darkBlue2,
    borderRadius: 5,
    padding: spacing(1),
    margin: spacing(1),
    maxHeight: 300,
    [MediaQueries.mdDown]: {
      minWidth: 600,
    },
  };
});
const DoughnutContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(3, 0, 3, 0),
    maxHeight: 150,
    height: "90%",
  };
});
const BarContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    height: "90%",
    paddingTop: spacing(1),
  };
});

const TurnText = styled.p(({ theme }) => ({
  ...FontStyles.roman12,
  color: theme.palette.text.primary,
  opacity: 88,
  textAlign: "center",
  margin: 0,
}));

const Box = styled(Grid)(({ theme }) => {
  return {
    height: "100%",
  };
});

const Styles = {
  Container,
  GraphsContainer,
  Box,
  DoughnutContainer,
  BarContainer,
  TurnText,
};

export default Styles;
