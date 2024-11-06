import styled from "styled-components";
import { Container as DefaultContainer, IconButton, makeStyles } from "@material-ui/core";
import { Colors } from "../../../config";
import MenuIcon from "@material-ui/icons/Menu";
import { FontStyles } from "../../../components";
const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    position: "relative",
    display: "flex",
    width: "100%",
    padding: spacing(2, 3),
    backgroundColor: "white",
    alignItems: "center",
    zIndex: 1,
    height: "min-content",
    justifyContent: "space-between",
    boxShadow: "0px 10px 20px #00000006",
  };
});

const Content = styled(DefaultContainer)(({ theme }) => {
  const { spacing } = theme;
  return {
    maxWidth: "100vw",
    display: "flex",
    width: "100%",
    padding: spacing(0.5),
    paddingLeft: spacing(0),
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  };
});

const FirstContentGroup = styled.div(({ theme }) => {
  const { spacing, breakpoints } = theme;
  return {
    display: "flex",
    alignItems: "center",
    padding: spacing(1.75, 6.25),
    paddingLeft: spacing(2),
    [breakpoints.down("sm")]: {
      padding: spacing(1.25, 0),
    },
  };
});

const UserContentGroup = styled.div(({ theme }) => {
  const { spacing, palette: colors, breakpoints } = theme;
  return {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    maxWidth: "clamp(200px, 14vw, 277px)",
    background: "transparent",
    paddingLeft: spacing(2.25),
    height: "fit-content",
    [breakpoints.down("md")]: {
      paddingBlock: spacing(0.5),
      paddingLeft: spacing(2),
      maxWidth: "clamp(200px, 14vw, 277px)",
    },
  };
});

const Rectangle = styled(IconButton)(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    "&&.MuiButtonBase-root": {
      display: "none",
      [breakpoints.down("md")]: {
        display: "inline-block",
        minWidth: 0,
        borderRadius: 0,
        padding: spacing(0.3),
        backgroundColor: colors.text.secondary,
        width: "auto",
        height: "auto",
        marginBlock: spacing(0.3),
        color: "white",
      },
    },
  };
});

const RectangleTwo = styled.div(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    display: "inline-block",
    width: spacing(3),
    height: spacing(2.625),
    backgroundColor: colors.background.default,

    [breakpoints.down("sm")]: {
      display: "none",
    },
  };
});

const LineBody = styled.div(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    backgroundColor: "transparent",
    borderLeft: spacing(1) + "px solid " + colors.text.primary,
    paddingLeft: spacing(0.5),
    height: "100%",
    marginRight: spacing(2),

    [breakpoints.down("sm")]: {
      display: "none",
    },
  };
});

const SubLine = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    backgroundColor: colors.text.primary,
    width: spacing(0.5),
    height: "100%",
  };
});

const IconMenu = styled(MenuIcon)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    color: colors.text.primary,
  };
});

const TextDescript = styled.p(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    display: "flex",
    padding: 0,
    margin: 0,
    fontFamily: FontStyles.regular12.fontFamily,
    fontSize: spacing(14 / 8),
    color: "#4D585A",

    justifyContent: "flex-start",
    alignContent: "center",
    letterSpacing: 0,
    [breakpoints.down("md")]: {
      display: "none",
    },
  };
});

const useStyles = makeStyles((theme) => {
  const { palette: colors, spacing } = theme;
  return {
    icon: {
      fill: "#7A12F5",
    },
    dot: {
      width: "5px",
      height: "5px",
      backgroundColor: "#10265A61",
      borderRadius: "50%",
      display: "inline-block",
    }
  };
});

const Styles = {
  Container,
  Content,
  FirstContentGroup,
  UserContentGroup,
  Rectangle,
  RectangleTwo,
  LineBody,
  SubLine,
  IconMenu,
  TextDescript,
  useStyles
};

export default Styles;
