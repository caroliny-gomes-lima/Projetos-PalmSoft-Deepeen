import { Button, makeStyles, Drawer as DefaultDrawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import styled from "styled-components";
import { FontStyles } from "../../../components";
import { MediaQueries } from "../../../config";
import { ChevronDown } from "../../../config/icons";

const useStyles = makeStyles((theme) => {
  const { palette: colors } = theme;
  return {
    icon: {
      width: 17,
      height: 17,
      paddingRight: 3,
      fill: colors.lightBlue,
    },
  };
});

const Drawer = styled(DefaultDrawer)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ".MuiDrawer-paper": {
      width: 350,
      maxWidth: "100vw",
      paddingTop: 0,
      backgroundColor: colors.darkBlue,
      height: "100vh",
      overflow: "hidden",
      [MediaQueries.mdDown]: {
        paddingTop: 0,
      },
    },
  };
});

const Header = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    padding: spacing(3.7, 3, 0.3, 3),
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)",
    [MediaQueries.mdDown]: {
      padding: spacing(0, 2),
      paddingTop: spacing(4.7),
    },
    [MediaQueries.smDown]: {
      paddingTop: spacing(5.7),
    },
  };
});

const ListContainer = styled.div(({ theme }) => {
  return {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
  };
});

const MenuLinksContainer = styled.div(({ theme }) => {
  //container do menuLateral
  const { spacing } = theme;
  return {
    flex: 1,
    overflowY: "auto",
    paddingBottom: spacing(10),
    //backgroundColor: "red",
  };
});

const GroupTitleContainer = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing(0, 5),
    cursor: "pointer",
    [MediaQueries.mdDown]: {
      padding: spacing(0, 2),
    },

    "&:hover": {
      backgroundColor: colors.text.primary + 30,
    },
  };
});

const GroupNameContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

const StyledChevronDown = styled(ChevronDown)(({ theme, $open }) => {
  const { palette: colors } = theme;
  return {
    fill: colors.text.secondary,
    transition: ".2s",
    transform: $open ? "rotate(180deg)" : "rotate(0deg)",
  };
});

const HideGroup = styled.div(({ $open }) => ({
  transition: "1s",
  overflow: "hidden",
  height: $open ? "unset" : 0,
}));

const Page = styled.a(({ theme, $disabled }) => {
  const { spacing, palette: colors } = theme;
  return {
    color: theme.palette.text.primary,
    cursor: $disabled ? "default" : "pointer",
    display: "flex",
    alignItems: "center",
    opacity: $disabled ? 0.5 : 1,
    padding: spacing(0, 5),
    ...FontStyles.roman14,
    "&:hover": {
      backgroundColor: $disabled ? null : colors.text.primary + 30,
    },

    [MediaQueries.mdDown]: {
      padding: spacing(0, 2),
    },
  };
});

const Group = styled.div(({ theme, $lastOne, $firstOne, $withoutPadding }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    borderBottom: `${$lastOne ? 2 : 1}px solid #262443`,
    borderTop: !$firstOne ? `1px solid #262443` : "none",
    paddingBottom: $withoutPadding ? 0 : spacing(1),
    [MediaQueries.mdDown]: {
      padding: spacing(0, 2, $withoutPadding ? 0 : 1, 2),
    },
    [MediaQueries.smDown]: {},
  };
});

const GroupTitle = styled.p((props) => ({
  color: props.theme.palette.text.primary,
  ...FontStyles.medium12,
}));

const ButtonClose = styled(Button)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    verticalAlign: "middle",
    color: colors.lightBlue,
    marginLeft: "auto",
  };
});

const MenuButton = styled(Button)(({ theme }) => {
  const { spacing } = theme;
  return {
    marginLeft: spacing(-2),
  };
});

const MenuIcon = styled(Menu)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    width: 40,
    height: 40,
    color: colors.lightBlue,
  };
});

const DotStyle = styled.span(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: spacing(3),
    lineHeight: 1,
    marginRight: spacing(0.5),
    opacity: 0.5,
  };
});

const Style = {
  Drawer,
  Header,
  MenuLinksContainer,
  Group,
  GroupTitleContainer,
  GroupNameContainer,
  StyledChevronDown,
  HideGroup,
  GroupTitle,
  Page,
  ListContainer,
  ButtonClose,
  MenuButton,
  MenuIcon,
  DotStyle,
  useStyles,
};

export default Style;
