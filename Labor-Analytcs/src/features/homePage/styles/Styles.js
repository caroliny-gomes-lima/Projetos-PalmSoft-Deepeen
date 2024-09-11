import styled from "styled-components";
import { Images, Logos, MediaQueries } from "../../../config";

const Container = styled.div((props) => ({
  display: "flex",
  flex: 1,
  overflow: "hidden",
  // height: "100%",
  position: "relative",
}));

const Logo = styled(Logos.LogoSrc)((props) => ({
  position: "absolute",
  width: "800px",
  maxWidth: "100%",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -70%)",
  opacity: 0.05,
}));

const Background = styled.div((props) => {
  return {
    marginLeft: "auto",
    height: "100%",
  };
});

const BackgroundImage = styled(Images.BackgroundTriangles)((props) => {
  const { spacing } = props.theme;
  return {
    position: "absolute",
    transform: `translate(${spacing(10)}px, -${spacing(8)}px)`,
    right: 0,
    maxWidth: "150%",
    [MediaQueries.smDown]: {
      opacity: 0.4,
    },
  };
});

const Styles = {
  Container,
  Logo,
  Background,
  BackgroundImage,
};

export default Styles;
