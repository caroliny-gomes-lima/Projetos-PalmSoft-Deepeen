import { Container as DefaultContainer } from "@material-ui/core";
import styled from "styled-components";
import { MediaQueries } from "../../config";

const InitialBackground = styled.div(({ $didMount }) => {
  return {
    opacity: $didMount ? 1 : 0,
    transition: "1s",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  };
});

const LoggedContainer = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    backgroundColor: colors.background.default,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    height: "100%",
    padding: spacing(0),
    [MediaQueries.lgDown]: {
      height: "100%",
    },
  };
});

const Container = styled(DefaultContainer)(({ theme, $maxWidth }) => {
  const { breakpoints } = theme;
  return {
    maxWidth: breakpoints.values[$maxWidth],
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto",
    flexWrap: "wrap",
    padding: 0,
  };
});

const Styles = {
  Container,
  LoggedContainer,
  InitialBackground,
};

export default Styles;
