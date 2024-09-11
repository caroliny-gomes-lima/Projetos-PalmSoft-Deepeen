import { Backdrop, Modal, Paper } from "@material-ui/core";
import styled from "styled-components";
import { MediaQueries, Fonts } from "../../../config";
import { Text } from "../../../components";

const StyledBackdrop = styled(Backdrop)({
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: "#00000020",
});

const StyledModal = styled(Modal)({
  outlineWidth: 0,
  borderWidth: 0,
  overflow: "hidden",
  ":focus": {},
});

const Container = styled(Paper)(({ theme }) => {
  const { spacing } = theme;
  return {
    position: "absolute",
    width: "fit-content",
    maxWidth: "100%",
    maxHeight: "90vh",
    paddingBlock: spacing(3),
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    outline: "none",
    backgroundColor: "#FFFFFF",
    overflowY: "auto",
    [MediaQueries.smDown]: {
      width: "95%",
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

const HeaderContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing(2),
    paddingTop: spacing(0),
    paddingBottom: spacing(0),
  };
});

const Group = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
  };
});

const Close = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    color: colors.white,
  };
});

const TextContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(2),
    paddingTop: spacing(0),
  };
});

const subTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: "black",
  };
});
const PaddingModal = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingInline: spacing(3.5),
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: spacing(1),
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
  subTitle,
  PaddingModal,
  Group,
};

export default Styles;
