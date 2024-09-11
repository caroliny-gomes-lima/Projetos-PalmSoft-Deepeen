import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { MediaQueries, Fonts } from "../../../config";
import NavigationButtonsStyles from "./NavigationButtonsStyles";
import { Close as DefaultClose } from "../../../config/icons";

const Container = styled(Paper)(({ theme, $visible }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    position: "absolute",
    bottom: -150,
    left: "20%",
    transform: breakpoints.values.xl - 200,
    padding: spacing(2),
    paddingTop: spacing(0.5),
    backgroundColor: colors.background.default,
    transition: "opacity 0.2s",
    opacity: $visible ? 1 : 0,
    pointerEventes: $visible ? "auto" : "none",
    maxHeight: "500vh",
    [MediaQueries.smDown]: {
      overflow: "auto",
    },
    [MediaQueries.mdDown]: {
      overflow: "auto",
    },
    [MediaQueries.lgDown]: {
      width: "75%",
      bottom: -340,
      left: "12%",
    },
  };
});

const HeaderContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing(2),
    fontSize: Fonts.light,
    borderBottom: "solid",
    borderBottomColor: "#626366",
  };
});

const Close = styled(DefaultClose)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    fill: colors.white,
  };
});

const Style = {
  Container,
  HeaderContainer,
  Close,
  IconButton: NavigationButtonsStyles.IconButton,
};

export default Style;
