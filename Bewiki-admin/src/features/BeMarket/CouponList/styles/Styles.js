import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import { Paper } from "@material-ui/core";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Button } from "@material-ui/core";

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "Column",
    width: "75%",
    height: "auto",
  };
});
const Content = styled(Paper)(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(2),
    background: "#FFFFFF",
    borderRadius: 5,
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    [MediaQueries.smDown]: {
      width: "100%",
    },
    margin: spacing(0.5)
  };
});
const HeaderContainer = styled.div((props) => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "solid 2px",
    color: "black",
  };
});

const ButtonTableCancel = styled(Button)(
  ({ theme, $backgroundNone, $defaultPadding, $defaultWidth }) => {
    return {
      backgroundColor: $backgroundNone ? "none" : "white",
      padding: $defaultPadding ? 2 : 13,
      ...FontStyles.medium12,
      color: "black",
      lineHeight: "normal",
      borderRadius: 25,
      width: $defaultWidth ? "90%" : "100%",
      height: "auto",
      ".MuiButton-startIcon": {
        fill: "colors.primary.contrastText",
        width: 17,
      },
      "&:hover": {
        color: "red",
      },
    };
  }
);

const ButtonTableApprove = styled(Button)(({ theme }) => {
  return {
    backgroundColor: "black",
    padding: 13,
    ...FontStyles.medium12,
    color: "white",
    lineHeight: "normal",
    borderRadius: 25,
    width: "100%",
    height: "auto",
    ".MuiButton-endIcon": {
      fill: "colors.primary.contrastText",
      width: 17,
      "&:hover": {
        backgroundColor: "E1E1E1",
      },
    },
  };
});

const TextButton = styled.div(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.medium12,
    color: $defaultColor ? "white" : "black",
    padding: spacing(0.7),
  };
});
const Styles = {
  Content,
  HeaderContainer,
  Container,
  TextButton,
  ButtonTableCancel,
  ButtonTableApprove,
};

export default Styles;
