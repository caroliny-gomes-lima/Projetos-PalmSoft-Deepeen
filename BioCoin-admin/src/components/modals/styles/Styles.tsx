import { Backdrop, Modal, Paper } from "@material-ui/core";
import styled from "styled-components";
import { Colors, Spacing } from "../../../config";
import CloseIcon from "@material-ui/icons/Close";
import FontStyles from "../../styles/fontStyles";
import { ButtonContained, ButtonText } from "../..";

const StyledBackdrop = styled(Backdrop)({
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: "#00000020",
  //background: theme.palette.primary.contrastText,
});

const StyledModal = styled(Modal)({
  outlineWidth: 0,
  borderWidth: 0,
  overflow: "hidden",
  ":focus": {},
});

const Container = styled.div(({ theme, noMaxWidth }) => {
  const { spacing } = theme;
  return {
    position: "absolute",
    width: "100%",
    maxWidth: noMaxWidth ? "60vw" : 470,
    maxHeight: "100vh",
    paddingBlock: Spacing(3),
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    outline: "none",
    background: Colors.gray,
    boxShadow:
      "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
    overflowY: "auto",
    borderRadius: "23.004px",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "unset",
    },
  };
});

const ContentContainer = styled.div(({ theme }) => {
  return {
    overflow: "hidden",
  };
});

const HeaderContainer = styled.div(({ theme, noExit }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: spacing(3.12),
    // marginTop: noExit ? spacing(1.5) : spacing(0.5),
  };
});

const Close = styled(CloseIcon)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    color: colors.text.primary,
    width: spacing(3),
    height: spacing(3),
  };
});

const TextContainer = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    // display: "flex",
    // flex: "wrap",
    // width: "34vw",
    color: colors.action.active,
    paddingBottom: Spacing(1),

    textAlign: "center",
    [`@media only screen and (max-height: 700px)`]: {
      padding: 0,
      margin: 0,
    },
  };
});
const PaddingModal = styled.div(({ theme }) => {
  return {
    paddingInline: Spacing(3.5),
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
  };
});
const ContentText = styled.p(({ theme, first }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.medium14,
    color: colors.text.primary,
    textAlign: "left",
    paddingInline: spacing(3.12),
    marginBottom: !first ? spacing(1) : spacing(2),
    marginTop: spacing(1),
  };
});
const Title = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.bold18,
      fontSize: "20px",
      fontWeight: 400,
      marginTop: Spacing(2),
  };
});
const FooterContainer = styled.div(({ theme }) => {
  return {
    marginTop: Spacing(1),
    paddingInline: Spacing(3.5),
    display: "flex",

    justifyContent: "flex-start",
    alignItems: "center",
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
  PaddingModal,
  ContentText,
  Title,
  FooterContainer,
};

export default Styles;
