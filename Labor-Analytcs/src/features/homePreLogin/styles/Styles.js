import styled from "styled-components";
import { FontStyles } from "../../../components";
import { Logos } from "../../../config";

const Container = styled.div((props) => ({
  display: "flex",
  width: "100%",
  height: "100%",
}));

const Content = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "32rem",
    maxWidth: `calc(100% - ${spacing(2)}px)`,
    maxHeight: `calc(100% - ${spacing(3)}px)`,
    padding: spacing(3, 4, 5, 4),
    backgroundColor: colors.darkBlue,
    borderRadius: 5,
    margin: "auto",
    overflowY: "auto",
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

const Logo = styled(Logos.LogoSrc)(({ theme }) => {
  return {
    width: "100%",
    height: "100%",
  };
});

const Subtitle = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    color: colors.text.primary,
    ...FontStyles.roman14,
    opacity: 0.88,
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
    ...FontStyles.italic14,
  };
});
const Styles = {
  Container,
  Content,
  LogoContainer,
  Logo,
  Version,
  Subtitle,
  Link,
};

export default Styles;
