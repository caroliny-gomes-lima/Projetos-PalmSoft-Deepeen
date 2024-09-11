import styled from "styled-components";
import { Container as DefaultContainer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Container = styled.div(({ theme }) => {
  const { breakpoints, spacing } = theme;
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "none",
    //backgroundColor: "rgba(255,255,255, 0.4)",
padding: spacing(1),
paddingRight: spacing(5),
    zIndex: 1,
    height: "min-content",
    justifyContent: "flex-end",
    //boxShadow: "0px 10px 20px #00000006",
    [breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing, breakpoints } = theme;
  return {
    width: "100%",
    maxWidth: "fit-content",
    display: "none",
    flexDirection: "row",
    paddingLeft: spacing(2),
    marginTop: spacing(1),
    marginBottom: spacing(1.5),
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    zIndex: 2,
    [breakpoints.down("md")]: {
      display: "flex",
    },
  };
});

const AreaButtomIcon = styled.div(({ theme }) => {
  const { spacing, breakpoints, palette: colors } = theme;
  return {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    padding: spacing(0.5, 0.5),
    //paddingLeft: spacing(1),
    //paddingRight: spacing(2.5),
    borderRadius: spacing(20),
    background: colors.secondary.main,
    [breakpoints.down("sm")]: {
      padding: spacing(1.25, 0),
    },
  };
});

const UserArea = styled.div(({ theme }) => {
  const { spacing, palette: colors, breakpoints } = theme;
  return {
    display: "flex",
    alignItems: "center",
    paddingBlock: spacing(1),
    paddingLeft: spacing(4),
    flex: 1,
    maxWidth: spacing(40),
    //background: Colors.softGray,
    [breakpoints.down("md")]: {
      paddingBlock: spacing(0.5),
      paddingLeft: spacing(3),
      maxWidth: "50vw",
    },
  };
});

const ButtonIcon = styled(IconButton)(({ theme }) => {
  const { spacing, breakpoints, palette: colors } = theme;
  return {
    display: "none",
    backgroundColor: colors.secondary.main,
    [breakpoints.down("sm")]: {
      display: "inline-block",
      minWidth: 0,
      borderRadius: 0,
      padding: spacing(0.3),
      width: "auto",
      height: "auto",
      marginBlock: spacing(0.3),
    },
  };
});

const IconMenu = styled(MenuIcon)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    color: colors.action.active,
  };
});

const Styles = {
  Container,
  Content,
  AreaButtomIcon,
  UserArea,
  ButtonIcon,
  IconMenu,
};

export default Styles;
