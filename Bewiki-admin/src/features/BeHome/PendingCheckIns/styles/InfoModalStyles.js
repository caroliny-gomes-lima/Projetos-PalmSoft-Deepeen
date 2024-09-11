import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Fonts } from "../../../../config";
import { Text } from "../../../../components";
import { Input } from "../../../../components";
import { Backdrop, Paper, Modal, Button, IconButton } from "@material-ui/core";
import { CheckCircle, Cancel } from "@material-ui/icons";

const styledBackDrop = styled(Backdrop)({
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: "#00000020",
});

const StyledIformationModal = styled(Modal)({
  outlineWidth: 0,
  borderWidth: 0,
  ":focus": {},
});

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  };
});

const ModalContainer = styled(Paper)(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    position: "absolute",
    bottom: 550,
    left: "50%",
    transform: "translate(-50%, 100%)",
    width: "50%",
    maxWidth: breakpoints.values.xl - 200,
    padding: spacing(2),
    backgroundColor: colors.white,
    transition: "opacity 0.2s",
    maxHeight: "85%",
    display: "flex",
    flexDirection: "column",

    [MediaQueries.lgUp]: {
      width: "40%",
      bottom: 620,
    },
    [MediaQueries.mdDown]: {
      width: "80%",
      bottom: 600,
    },
    [MediaQueries.smDown]: {
      width: "95%",
      bottom: 600,
    },
    [MediaQueries.xsDown]: {
      width: "90%",
      bottom: 600,
    },
  };
});

const ModalContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(0),
    borderRadius: 5,
    display: "flex",
    flexWrap: "wrap",
    marginBottom: spacing(0),
    overflow: "hidden",
  };
});

const HeaderContainer = styled.div((props) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  };
});

const Title = styled(Text)(
  ({ theme, $defaultMarginTop, $defaultMarginBottom, $defaultColor }) => {
    const { spacing } = theme;
    return {
      color: $defaultColor ? "#1FC299" : "black", //mudei cor aqui ajustar tema depois
      marginTop: $defaultMarginTop ? spacing(1) : null,
      marginBottom: $defaultMarginBottom ? spacing(2) : spacing(0),
      ...FontStyles.bold14,
    };
  }
);

export const subTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingTop: spacing(2),
    paddingBottom: spacing(1),
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "black",
  };
});

const ButtonInfo = styled(IconButton)(() => {
  return {
    "&:hover": {
      background: "none",
    },
  };
});

const TextFieldButton = styled(Button)(({ theme, $defaultFont }) => {
  const { spacing } = theme;
  return {
    fontFamily: $defaultFont ? Fonts.medium : Fonts.bold,
    fontSize: 14,
    color: "black",
    width: "100%",
    marginLeft: spacing(1),
    marginTop: spacing(2),
    marginBottom: spacing(1),
    lineHeight: "normal",
    borderRadius: 25,
    padding: spacing(0.8, 2),
    ".MuiButton-endIcon": {
      fill: "colors.primary.contrastText",
      width: 17,
    },
    "&:hover": {
      opacity: 0.8,
    },
  };
});

const deleteTextFieldButton = styled(Button)(() => {
  return {
    backgroundColor: "none",
    padding: 0,
    fontFamily: Fonts.medium,
    fontSize: 10,
    color: "black",
    lineHeight: "normal",
    borderRadius: 25,
    width: "50%",
    height: "auto",
    ".MuiButton-endIcon": {
      width: 30,
    },
  };
});

const iconButtom = styled(IconButton)(({ theme, $setMarginTop }) => {
  const { spacing } = theme;
  return {
    backgroundColor: "black",
    color: "white",
    padding: spacing(1.5),
    marginRight: null,
    marginTop: spacing(2),
    marginBottom: spacing(-2),
    borderRadius: 25,
    width: "1%",
    height: "2%",
    "&:hover": {
      backgroundColor: "black",
      opacity: 0.8,
    },
  };
});

const InputContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F8F8F8", //mudei cor aqui ajustar tema depois
    borderRadius: "5px",
    width: "100%",
    padding: spacing(2),
    marginBottom: spacing(2),
  };
});

const IconCheckCircle = styled(CheckCircle)(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: spacing(0),
    marginBottom: spacing(1),
    marginTop: spacing(3),
    marginRight: spacing(-5),
    color: "#1FC299",
  };
});

const IconCancel = styled(Cancel)(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: spacing(0),
    marginBottom: spacing(1),
    marginTop: spacing(3),
    marginRight: spacing(-5),
    color: "#1FC299",
  };
});

export const InputTitle = styled(Text)(() => {
  return {
    fontFamily: Fonts.semibold,
    fontWeight: "bold",
    color: "#333438",
    fontSize: 12,
  };
});

const codeInput = styled(Input)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: 16,
    borderBottom: "solid 1px",
    width: "103%",
    border: "none",
    marginTop: spacing(0),
    marginLeft: spacing(-1),
    //marginBottom: spacing(1),
  };
});

const Styles = {
  styledBackDrop,
  Container,
  StyledIformationModal,
  ModalContainer,
  ModalContent,
  HeaderContainer,
  Title,
  subTitle,
  TextFieldButton,
  codeInput,
  InputTitle,
  InputContainer,
  deleteTextFieldButton,
  iconButtom,
  IconCheckCircle,
  IconCancel,
  ButtonInfo,
};
export default Styles;
