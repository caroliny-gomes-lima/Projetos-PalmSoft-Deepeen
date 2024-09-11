import styled from "styled-components";
import { FontStyles } from "../../../components";
import { Button, IconButton, Paper } from "@material-ui/core";
import { Fonts } from "../../../config";
import Logos from "../../../config/logos";
import { MediaQueries } from "../../../config";
import Icons from "../../../config/icons";

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

const Content = styled(Paper)(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "32rem",
    maxWidth: `calc(100% - ${spacing(2)}px)`,
    maxHeight: `calc(100% - ${spacing(3)}px)`,
    padding: spacing(4),
    backgroundColor: "#F6F6F6", //mudar cor depois(#f6fbff)
    borderRadius: 5,
    margin: "auto",
    //overflowY: "auto",
    boxShadow: 5,
  };
});

const HeaderContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    width: "32rem",
    maxWidth: `calc(100% - ${spacing(2)}px)`,
    maxHeight: `calc(100% - ${spacing(3)}px)`,
    padding: spacing(1),
    background: "none",
    borderRadius: 5,
  };
});

const BackButton = styled(IconButton)(({ theme }) => {
  return {
    width: "auto",
    marginRight: "60px",
    "&:hover": {
      background: "none",
    },
  };
});

const ForgotPasswordButton = styled(Button)(({ theme }) => {
  return {
    "&:hover": {
      background: "none",
    },
    textDecoration: "underline",
    fontStyle: "italic",
    textTransform: "none",
    marginTop: "-25px",
  };
});

const LogoContainer = styled.div(({ theme }) => {
  return {
    width: "217px",
    height: "107px",
    alignSelf: "center",
    marginBottom: "23px",
  };
});

const TokenFieldContainer = styled.div(({ theme }) => {
  return {
    alignSelf: "center",
    marginBottom: "23px",
  };
});

const VersionContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    //width: "217px",
    //height: "107px",
    alignSelf: "center",
    marginBottom: spacing(0),
    marginTop: spacing(2),
  };
});

const Logo = styled(Logos.bewikiLogo)(({ theme }) => {
  return {
    width: "100%",
    height: "100%",
  };
});

const Background = styled.div((props) => {
  return {
    marginLeft: "auto",
    height: "auto",
  };
});

const LeftShape = styled(Icons.leftShape)((props) => {
  const { spacing } = props.theme;
  return {
    position: "absolute",
    width: "100%",
    height: "101%",
    transform: `translate(-${spacing(82)}px, ${spacing(0)}px)`,
    right: 0,
    maxWidth: "100%",
    [MediaQueries.smDown]: {
      opacity: 0.4,
    },
  };
});
const RightShape = styled(Icons.rightShape)((props) => {
  const { spacing } = props.theme;
  return {
    position: "absolute",
    width: "100%",
    height: "101%",
    transform: `translate(${spacing(76)}px, ${spacing(0)}px)`,
    right: 0,
    maxWidth: "100%",
    [MediaQueries.smDown]: {
      opacity: 0.4,
    },
  };
});

const Subtitle = styled.p(({ theme }) => {
  return {
    color: "black",
    ...FontStyles.roman14,
    opacity: 0.88,
    margin: 0,
  };
});

const Link = styled.a(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    color: colors.text.primary,
    ...FontStyles.roman14,
    textDecoration: "underline",
    cursor: "pointer",
    transition: ".2s",
    alignSelf: "flex-end",
    marginBottom: spacing(3),
    ":hover": {
      color: colors.text.secondary,
    },
  };
});

const Version = styled.p(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    alignSelf: "center",
    marginTop: spacing(4),
    color: colors.text.primary,
    fontFamily: Fonts.bold,
    fontSize: Fonts.sizes.small,
    ...FontStyles.italic14,
  };
});

const StyledButton = styled(Button)(({ theme, fullWidth }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: fullWidth ? "100%" : "fit-content",
    margin: spacing(0),
    padding: spacing(1.1, 1),
    fontFamily: Fonts.semibold,
    fontSize: 14,
    backgroundColor: colors.action.backgroundHover,
    color: "white",
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: "20px",
    ".MuiButton-startIcon": {
      fill: "colors.primary.contrastText",
      width: 17,
    },
    "&:hover": {
      backgroundColor: colors.action.disabledBackground,
      color: colors.action.active,
    },
  };
});

const Styles = {
  Container,
  HeaderContainer,
  BackButton,
  ForgotPasswordButton,
  Content,
  LogoContainer,
  VersionContainer,
  Logo,
  Version,
  Subtitle,
  Link,
  Background,
  RightShape,
  LeftShape,
  StyledButton,
  TokenFieldContainer,
};

export default Styles;
