import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { Text } from "../../../components";
import { MediaQueries } from "../../../config";
import NavigationButtonsStyles from "./NavigationButtonsStyles";

const Container = styled(Paper)(({ theme, $visible }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: "translate(-50%, 100%)",
    width: "80%",
    maxWidth: breakpoints.values.xl - 200,
    padding: spacing(2),
    backgroundColor: colors.background.default,
    transition: "opacity 0.2s",
    opacity: $visible ? 1 : 0,
    pointerEvents: $visible ? "auto" : "none",
    overflowY: "auto",
    maxHeight: "70vh",
    [MediaQueries.mdDown]: {
      width: "90%",
    },

    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});

const Title = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    marginBottom: spacing(2),
  };
});

const Style = {
  Container,
  Title,
  ButtonOutlined: NavigationButtonsStyles.ButtonOutlined,
};

export default Style;
