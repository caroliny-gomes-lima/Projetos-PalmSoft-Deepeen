import styled from "styled-components";
import { FontStyles } from "../../../components";

const Icon = styled.img(({ theme, $HoverColor, $Hover }) => {
  const { spacing } = theme;
  return {
    paddingRight: spacing(0.625),
    width: spacing(3.5),
    height: spacing(3.5),
    filter: $HoverColor ? "brightness(0) invert(1)" : "brightness(0%)",
    minWidth: 24,
  };
});

const Container = styled.div(({ theme }) => {
  const { breakpoints } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "89vh",
    width: "min-content",
    justifyContent: "space-between",
    position: "relative",
    //boxShadow: "0px 0px 4px #00000014",
    maxWidth: "20vw",
    minWidth: "20vw",
    zIndex: 90,
    [breakpoints.down("md")]: {
      maxWidth: "100vw",
      minWidth: "36vw",
    },
  };
});

const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflow: "auto",
    width: "100%",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "unset",
    },
  };
});

const Group = styled.div(({ theme, $withoutPadding }) => {
  const { spacing, breakpoints } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    paddingBottom: $withoutPadding ? 0 : spacing(1),
    marginTop: spacing(4),
    [breakpoints.down("md")]: {
      padding: spacing(0, 2, $withoutPadding ? 0 : 1, 2),
    },
  };
});

const Page = styled.a(({ theme, $disabled, $currentPage, subPages }) => {
  const { spacing, palette: colors, breakpoints } = theme;
  return {
    padding: spacing(2),
    gap: 10,
    backgroundColor: $currentPage ? colors.text.primary : null,
    color: $currentPage ? colors.text.secondary : colors.text.primary,
    cursor: $disabled || subPages ? "default" : "pointer",
    display: "flex",
    alignItems: "flex-end",
    opacity: $disabled ? 0.55 : 1,
    marginBottom: spacing(2),
    marginLeft: spacing(3.5),
    marginRight: spacing(3),
    borderRadius: "15px",
    ...FontStyles.regular16,
    [breakpoints.down("md")]: {
      padding: spacing(0, 1),
      marginLeft: 0,
    },
  };
});

const SubGroup = styled.div(() => ({
  transition: "1s",
  overflow: "hidden",
  height: "auto",
}));

const Header = styled.div(({ theme }) => {
  const { spacing, breakpoints } = theme;
  return {
    padding: spacing(3.5, 2.2),
    paddingLeft: spacing(5),
    paddingBottom: spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "flex-start",
      padding: spacing(3.5, 1),
      marginLeft: 0,
    },
  };
});

const LogoutArea = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1),
    paddingLeft: spacing(1),
    paddingBottom: spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing(4),
  };
});

const WebMenu = styled.div(({ theme }) => {
  const { spacing, breakpoints } = theme;
  return {
    display: "flex",
    [breakpoints.down("md")]: {
      display: "none",
    },
  };
});

const MobileMenu = styled.div(({ theme }) => {
  const { spacing, breakpoints } = theme;
  return {
    display: "none",
    [breakpoints.down("md")]: {
      display: "flex",
    },
  };
});

const Styles = {
  Icon,
  Header,
  Container,
  Group,
  Page,
  SubGroup,
  ScrollContainer,
  LogoutArea,
  WebMenu,
  MobileMenu,
};

export default Styles;
