import { Backdrop, Modal, Paper } from "@material-ui/core";
import styled from "styled-components";
import { Spacing } from "../../../config";
import CloseIcon from "@material-ui/icons/Close";
import FontStyles from "../../styles/fontStyles";
import { ButtonContained, ButtonText } from "../..";

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

const Container = styled(Paper)(({ theme, noMaxWidth }) => {
  const { spacing } = theme;
  return {
    position: "absolute",
    width: "auto",
    maxWidth: noMaxWidth ? "60vw" : 470,
    maxHeight: "90vh",
    paddingBlock: Spacing(3),
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    outline: "none",
    backgroundColor: "#FFFFFF",
    overflowY: "auto",
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
  return {
    color: "black",
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
  };
});
const ContentText = styled.p(({ theme, first }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.medium14,
    color: colors.text.primary,
    textAlign: "justify",
    paddingInline: spacing(3.12),
    marginBottom: !first ? spacing(1) : spacing(2),
    marginTop: spacing(1),
  };
});
const Title = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.bold16,
    color: colors.text.primary,
    fill: colors.text.secondary,
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    gap: "8px",
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

const ConfirmButton = styled(ButtonContained)(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.medium16,
    width: "auto",
    marginLeft: spacing(2),
  };
});

const ExitButton = styled(ButtonText)(({ theme }) => {
  return {
    ...FontStyles.medium16,

    textTransform: "capitalize",
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
  ConfirmButton,
  ExitButton,
};

export default Styles;
