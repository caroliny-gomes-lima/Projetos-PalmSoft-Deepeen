import styled from "styled-components";
import { FontStyles } from "../../components";

import { Colors, Spacing } from "../../config";

const ImageBG = styled.div(({ theme }) => {
  const { palette: colors } = theme;

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

const Content = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    position: "relative",

    justifyContent: "center",
    flexDirection: "column",
    padding: spacing(6.25),
    //overflowX: "auto",
    textAlign: "left",
    backgroundColor: colors.background.paper,
    borderRadius: spacing(1.1),

    width: spacing(72.5),
    maxHeight: spacing(90),
    height: "85%",
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

const Title = styled.p(({ theme }) => {
  return {
    color: Colors.purple,
    margin: 0,
    textAlign: "left",
    ...FontStyles.bold18,
    textTransform: "uppercase",
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

const CTGLogo = styled.img(() => {
  return {
    width: Spacing(17),
    height: "auto",
  };
});

const ForgotPasswordButton = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    textAlign: "right",
    ...FontStyles.medium14,
    color: colors.blue,
    textDecoration: "underline",
    marginBottom: Spacing(4),
    cursor: "pointer",
  };
});

const Version = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const ButtonContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  };
});

const P = styled.p(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.light16,
    color: colors.text.secondary,
    margin: 0,
    marginLeft: spacing(2),
    padding: 0,
  };
});

const Styles = {
  Content,
  Title,
  Subtitle,
  text,
  LogoContainer,
  Header,
  CTGLogo,
  ImageBG,
  ForgotPasswordButton,
  Version,
  ButtonContainer,
  P,
};

export default Styles;
