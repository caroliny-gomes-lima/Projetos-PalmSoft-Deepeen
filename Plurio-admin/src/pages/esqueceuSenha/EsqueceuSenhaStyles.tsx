import styled from "styled-components";

import fonts from "../../config/fonts";
import { Colors, Spacing } from "../../config";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Button, FormHelperText, Input, Link } from "@material-ui/core";
import { Info } from "@material-ui/icons";
import { ButtonText, FontStyles } from "../../components";
const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    width: "100%",
    height: "100vh",

    flexDirection: "column",
    padding: Spacing(2, 3, 2, 3),
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    flexDirection: "column",

    overflow: "hidden",
    textAlign: "left",
    padding: spacing(6.25),
    overflowX: "auto",

    backgroundColor: colors.background.paper,
    borderRadius: spacing(1.1),

    width: spacing(72.5),
    maxHeight: spacing(85.5),
    height: "85%",
  };
});
const CardContent = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    position: "relative",

    justifyContent: "space-between",
    flexDirection: "column",
    padding: spacing(6.25),
    overflowX: "auto",
    textAlign: "left",
    backgroundColor: colors.background.default,
    borderRadius: spacing(1.1),

    width: spacing(72.5),
    maxHeight: spacing(85.5),
    height: "85%",
  };
});
const ImageBG = styled.div(() => {
  return {
    background: "linear-gradient(95deg, #7A12F5, #7A12F5, #5BCBF5)",
    display: "flex",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
});

const Card = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    backgroundColor: colors.background.default,
    borderRadius: spacing(1.1),

    padding: spacing(6.25),
    overflowX: "auto",

    width: spacing(72.5),
  };
});

const Header = styled.div(() => {
  return {
    width: "100%",
    marginBottom: Spacing(1),
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
  };
});

const Footer = styled.div(({ theme }) => {
  // const { spacing } = theme;
  return {
    width: "100%",
    height: "fit-content",

    display: "flex",
    alignSelf: "center",
    justifyContent: "flex-end",
    paddingInline: "19%",
    marginInline: "auto",
  };
});
const NavButtons = styled.div(({ theme }) => {
  // const { spacing } = theme;
  return {
    width: "fit-content",
    display: "flex",
    alignSelf: "center",
    justifyContent: "flex-start",
  };
});

const Title = styled.p(({ theme }) => {
  return {
    color: Colors.purple,
    margin: 0,
    textAlign: "left",
    ...FontStyles.bold18,
    textTransform: "unset",
    marginBottom: Spacing(1),
  };
});

const Subtitle = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    color: colors.grayText,
    ...FontStyles.bold14,
    margin: 0,
    marginBottom: Spacing(0.5),
  };
});

const text = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    color: Colors.purple,
    ...FontStyles.italic12,
    margin: 0,
    paddingBottom: Spacing(3),
    fontStyle: "italic",
  };
});

const EcomLogo = styled.img(({ theme }) => {
  // const { spacing } = theme;
  return {
    width: Spacing(15),
    height: "auto",
  };
});

const P = styled.p(({ theme, gray }) => {
  const { palette: colors } = theme;
  return {
    fontFamily: gray ? fonts.medium : fonts.bold,
    color: gray ? colors.grayText : colors.purple,
    fontSize: fonts.sizes.regular,
  };
});

const Span = styled.span(({ theme }) => {
  const { palette: colors } = theme;
  return {
    fontFamily: fonts.bold,
    color: colors.purple,
    fontSize: fonts.sizes.regular,
    marginLeft: 3,
  };
});

const NavigationTitle = styled.p(() => {
  return {
    ...FontStyles.medium12,
    color: "#C2C2C2",
    margin: 0,
  };
});
const NavigationPage = styled.p(() => {
  return {
    ...FontStyles.medium14,
    color: "#C2C2C2",
    margin: 0,
  };
});
const Return = styled(Button)(() => {
  return {
    ...FontStyles.bold14,
    color: "#2C4D74",
    margin: 0,
    fontWeight: "800",
  };
});
const ArrowCircle = styled.div(() => {
  return {
    border: "1px solid #EFEFEF",
    borderRadius: Spacing(20),
    marginRight: Spacing(2),
    height: Spacing(3),
    width: Spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});
const ArrowLeft = styled(ArrowBackIcon)(() => {
  return {
    height: Spacing(1.8),
    width: Spacing(1.8),
  };
});
const ArrowRight = styled(ArrowForwardIcon)(() => {
  return {
    height: Spacing(1.8),
    width: Spacing(1.8),
  };
});
const InputCode = styled(Input)(() => {
  return {
    width: "100%",
    height: "80%",
    color: "#464646",
    "& .MuiInput-input": {
      fontSize: 30,
      marginLeft: 10,
      textTransform: "uppercase",
    },
  };
});
const ButtonReSend = styled(ButtonText)(() => {
  return {
    marginBottom: Spacing(4),
  };
});
const ErrorMessage = styled(FormHelperText)(() => {
  return {
    color: "red",
    minHeight: Spacing(2.5),
  };
});

const InputBox = styled.div(({ $Image }) => {
  return {
    marginBottom: Spacing(4.5),
  };
});

const MarginBottom = styled.div(({ theme, center }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: center ? "center" : "flex-start",
    alignItems: center ? "center" : "flex-start",
    marginBottom: spacing(5),
  };
});
const LabelContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    marginTop: spacing(0),
    marginBottom: spacing(1),
    marginLeft: spacing(4),
    width: "100%",
    display: "flex",
  };
});
const InputCodeLabel = styled.p(({ theme }) => {
  return {
    ...FontStyles.bold16,
    color: "black",
    fontSize: 12,
  };
});

const Countdown = styled.p(({ theme }) => {
  return {
    width: "100%",
    margin: 0,
    padding: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#626366",
    ...FontStyles.medium16,
    fontFamily: fonts.light,
    marginBottom: Spacing(1.5),
  };
});

const ReSend = styled(Link)(({ theme, disabled }) => {
  const { palette: colors } = theme;
  return {
    width: "100%",
    textAlign: "center",
    cursor: !disabled ? "pointer" : "default",
    color: colors.text.secondary,
    opacity: disabled ? 0.6 : 1,
    margin: 0,
    padding: 0,
    textDecoration: "underline",
    marginBottom: Spacing(1.5),
    ...FontStyles.medium18,
  };
});
const InfoIcon = styled(Info)(({ theme }) => {
  const { spacing } = theme;
  return {
    width: spacing(1.75),
    height: spacing(1.75),
    padding: 0,
    marginRight: spacing(0.5),
  };
});
const LogoContainer = styled.div(() => {
  return {
    width: "fit-content",
    marginBottom: Spacing(1),
    display: "flex",
    alignSelf: "center",
    justifyContent: "flex-start",
  };
});

const Styles = {
  Container,
  Content,
  Title,
  Subtitle,
  text,
  Header,
  EcomLogo,
  P,
  Span,
  ImageBG,
  Footer,
  NavigationTitle,
  NavigationPage,
  Return,
  ArrowLeft,
  ArrowRight,
  ArrowCircle,
  InputCode,
  ButtonReSend,
  ErrorMessage,
  InputBox,
  NavButtons,
  MarginBottom,
  LabelContainer,
  InputCodeLabel,
  Countdown,
  ReSend,
  InfoIcon,
  CardContent,
  Card,
  LogoContainer,
};

export default Styles;
