import styled from "styled-components";
import { Logos, MediaQueries } from "../../../config";
import { Container as DefaultContainer } from "@material-ui/core";

const Container = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    position: "relative",
    display: "flex",
    width: "100%",
    backgroundColor: colors.darkBlue,
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)",
    zIndex: 1,
  };
});

const Content = styled(DefaultContainer)(({ theme, $maxWidth }) => {
  const { spacing, breakpoints } = theme;
  return {
    maxWidth: breakpoints.values[$maxWidth],
    display: "flex",
    width: "100%",
    padding: spacing(2, 3),
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
    [MediaQueries.mdDown]: {
      padding: spacing(4, 1, 1, 3),
    },
    [MediaQueries.smDown]: {
      padding: spacing(4, 0, 1, 2),
    },
  };
});

const FirstContentGroup = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
}));

const SecondContentGroup = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
}));

const ThirdContentGroup = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
}));

const LogoContainer = styled.div((props) => {
  const smWidth = 90;
  const normalWidth = 110;
  return {
    width: normalWidth,
    height: normalWidth / 2.5,
    flexShrink: 0,
    [MediaQueries.smDown]: { width: smWidth, height: smWidth / 2.5 },
  };
});

const Logo = styled(Logos.LogoSrc)((props) => ({
  width: "100%",
  height: "100%",
  alignSelf: "center",
}));

const Styles = {
  Container,
  Content,
  FirstContentGroup,
  SecondContentGroup,
  ThirdContentGroup,
  LogoContainer,
  Logo,
};

export default Styles;
