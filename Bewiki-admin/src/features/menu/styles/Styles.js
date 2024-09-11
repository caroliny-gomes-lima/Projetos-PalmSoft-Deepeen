import styled from "styled-components";
import { IconButton, makeStyles } from "@material-ui/core";
import { Colors, Logos } from "../../../config";
import { FontStyles } from "../../../components";
import { MediaQueries } from "../../../config";

const useStyles = makeStyles((theme) => {
  const { palette: colors, spacing } = theme;
  return {
    icon: {
      paddingRight: spacing(0.625),
      width: "1.5rem",
      height: "1.5rem",
      marginRight: spacing(0.5),
      fill: colors.white,
    },
    subicon: {
      paddingRight: spacing(0.625),
      width: "auto",
      height: "0.8rem",
      marginRight: spacing(0.5),
    },
  };
});

const ShowQuery = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100vh",
    width: 0,
    backgroundColor: colors.background.secondary,
    position: "relative",
    boxShadow: "0px 0px 4px #00000014",
    maxWidth: "16vw",
    minWidth: "16vw",
    zIndex: 90,
    [MediaQueries.smDown]: {
      width: 0,
      maxWidth: 0,
      minWidth: 0,
    },
  };
});

const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100vh",
    width: "16vw",
    backgroundColor: "#303036", //ajustar cor depois no tema
    position: "relative",
    boxShadow: "0px 0px 4px #00000014",
    [MediaQueries.smDown]: {
      width: "80vw",
    },
  };
});

const Background = styled.div((props) => {
  return {
    marginLeft: "auto",
    height: "100%",
  };
});

const Logo = styled(Logos.bewikiLogo)(({ theme }) => {
  const { spacing } = theme;
  return {
    marginInline: spacing(2.5),
    marginTop: spacing(2),
    height: "1.5rem",
    width: "fit-content",
    filter: "brightness(0) invert(1)",
  };
});

const SubLogo = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.bold10,
    marginInline: spacing(3),
    letterSpacing: 1,
    fontWeight: "600",
    color: "white", //mudei cor aqui ajustar tema depois
    marginTop: spacing(-0.1),
  };
});

const Line = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: "white", //mudei cor aqui ajustar tema depois
    opacity: 0.2,
    width: "100%",
    height: 1,
    marginTop: spacing(-0.5),
  };
});

const FirstContentGroup = styled.div((props) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

const CloseMenuButton = styled(IconButton)(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    color: Colors.white0,
    height: spacing(1.625),
    width: spacing(1.625),
    margin: spacing(2),
    [MediaQueries.smUp]: {
      display: "none",
    },
  };
});

const ScrollContainer = styled.div(({ theme }) => {
  return {
    overflow: "auto",
    width: "100%",
  };
});

const Group = styled.div(({ theme, $lastOne, $firstOne, $withoutPadding }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    paddingBottom: $withoutPadding ? 0 : spacing(1),
    marginTop: spacing(3.75),
    [MediaQueries.mdDown]: {
      padding: spacing(0, 2, $withoutPadding ? 0 : 1, 2),
    },
    [MediaQueries.smDown]: {},
  };
});

const GroupTitle = styled.p((props) => ({
  margin: 0,
  color: "white", //mudei cor aqui ajustar tema depois
  ...FontStyles.semibold12,
}));

const GroupNameContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

const GroupTitleContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing(0, 5),
    [MediaQueries.mdDown]: {
      padding: spacing(0, 2),
    },
  };
});

const Page = styled.a(({ theme, $disabled }) => {
  const { spacing, palette: colors } = theme;
  return {
    color: "white", //mudei cor aqui ajustar tema depois
    cursor: $disabled ? "default" : "pointer",
    display: "flex",
    alignItems: "center",
    opacity: $disabled ? 0.5 : 1,
    padding: spacing(0, 5),
    marginTop: spacing(2.5),
    ...FontStyles.medium14,
    "&:hover": {
      backgroundColor: $disabled ? null : colors.text.primary + 30,
    },

    [MediaQueries.mdDown]: {
      padding: spacing(0, 2),
    },
  };
});

const SubGroup = styled.div(({ props }) => ({
  transition: "1s",
  overflow: "hidden",
  height: "unset",
}));

const Styles = {
  FirstContentGroup,
  ShowQuery,
  Container,
  Logo,
  Background,
  SubLogo,
  Line,
  CloseMenuButton,
  GroupTitle,
  Group,
  GroupNameContainer,
  useStyles,
  Page,
  GroupTitleContainer,
  SubGroup,
  ScrollContainer,
};

export default Styles;
