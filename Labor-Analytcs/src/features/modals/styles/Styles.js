import { Backdrop, Modal, Paper } from "@material-ui/core";
import styled from "styled-components";
import { MediaQueries } from "../../../config";
import { Close as DefaultClose } from "../../../config/icons";

const StyledBackdrop = styled(Backdrop)({
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: "#00000020",
});

const StyledModal = styled(Modal)({
  outlineWidth: 0,
  borderWidth: 0,
  ":focus": {},
});

const Container = styled(Paper)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    position: "absolute",
    width: 300,
    maxWidth: 400,
    padding: spacing(2),
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    outline: "none",
    backgroundColor: colors.background.default,

    [MediaQueries.smUp]: {
      width: `calc(100% - ${spacing(2)}px)`,
    },
  };
});

const ContentContainer = styled.div(({ theme }) => {
  return {
    flex: 1,
    overflowX: "hidden",
    overflowY: "auto",
  };
});

const HeaderContainer = styled.div((props) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
});

const Close = styled(DefaultClose)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    fill: colors.white,
  };
});

const TextContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(2, 0, 4, 0),
  };
});

const Styles = {
  StyledBackdrop,
  StyledModal,
  Container,
  ContentContainer,
  HeaderContainer,
  Close,
  TextContainer,
};

export default Styles;
