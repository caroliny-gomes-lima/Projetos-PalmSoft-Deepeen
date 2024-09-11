import { Container as DefaultContainer } from "@material-ui/core";
import styled from "styled-components";

const InitialBackground = styled.div(({ $didMount }) => {
  return {
    opacity: $didMount ? 1 : 0,
    transition: "1s",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };
});

const LoggedContainer = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    backgroundColor: colors.background.default,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflow: "auto",
    padding: spacing(2, 0),
  };
});

const Container = styled(DefaultContainer)(({ theme, $maxWidth }) => {
  const { breakpoints } = theme;
  return {
    maxWidth: breakpoints.values[$maxWidth],
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: 0,
  };
});

const Styles = {
  Container,
  LoggedContainer,
  InitialBackground,
};

export default Styles;
