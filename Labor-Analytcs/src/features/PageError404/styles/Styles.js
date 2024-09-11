import styled from "styled-components";
import { Images, Logos, MediaQueries } from "../../../config";
import { FontStyles } from "../../../components";

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    position: "relative",
    right: 0,
    flexDirection: "column",
    width: "32rem",
    maxWidth: `calc(100% - ${spacing(2)}px)`,
    maxHeight: `calc(100% - ${spacing(3)}px)`,
    padding: spacing(3, 4, 5, 4),
    borderRadius: 5,
    margin: "auto",
    marginBottom: "150px",
  };
});

const LogoContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    maxWidth: `calc(150% - ${spacing(2)}px)`,
    maxHeight: `calc(100% - ${spacing(3)}px)`,
    alignSelf: "center",
  };
});

const Logo = styled(Logos.LogoSrc)(({ theme }) => {
  return {
    width: "570px",
    height: "auto",
  };
});

const Subtitle = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    color: colors.text.primary,
    textAlign: "center",
    padding: spacing(1, 1, 2, 1),
    ...FontStyles.bold18,
  };
});

const Background = styled.div((props) => {
  return {
    marginLeft: "auto",
    height: "100%",
    backgroundColor: "white",
  };
});

const BackgroundImageRight = styled(Images.BackgroundTriangles)((props) => {
  const { spacing } = props.theme;
  return {
    position: "absolute",
    transform: `translate(${spacing(10)}px, -${spacing(8)}px)`,
    right: 0,
    maxWidth: "40%",
    [MediaQueries.smDown]: {
      opacity: 0.4,
    },
  };
});

const BackgroundImageLeft = styled(Images.BackgroundTriangles)((props) => {
  const { spacing } = props.theme;
  return {
    position: "absolute",
    transform: `translate(${spacing(-20)}px, -${spacing(
      -2
    )}px) rotate(${-180}deg)`,
    left: -120,
    top: -200,
    maxWidth: "40%",
    [MediaQueries.smDown]: {
      opacity: 0.4,
    },
  };
});

const Styles = {
  Container,
  Logo,
  BackgroundImageLeft,
  LogoContainer,
  Content,
  Subtitle,
  BackgroundImageRight,
  Background,
};

export default Styles;