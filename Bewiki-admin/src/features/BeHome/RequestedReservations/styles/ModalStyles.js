import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Fonts } from "../../../../config";
import { Input, ButtonContained, Text } from "../../../../components";
import { Backdrop, Paper, Modal, Button } from "@material-ui/core";
import { Colors } from "../../../../config";

const styledBackDrop = styled(Backdrop)({
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: Colors.opacityColor,
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
  const { palette: colors, spacing } = theme;
  return {
    position: "absolute",
    bottom: 550,
    left: "50%",
    transform: "translate(-50%, 100%)",
    width: "50%",
    padding: spacing(2),
    backgroundColor: colors.white,
    transition: "opacity 0.2s",
    maxHeight: "103vh",
    display: "flex",
    flexDirection: "column",

    [MediaQueries.lgDown]: {
      width: "60%",
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
      width: "100%",
      bottom: 600,
    },
  };
});

const ModalContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1),
    display: "flex",
    flexWrap: "wrap",
    marginBottom: spacing(0),
    backgroundColor: Colors.white1,
    paddingInline: spacing(2),
  };
});

const HeaderContainer = styled.div(({ theme, $defaultMargin }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: $defaultMargin ? spacing(1) : spacing(0),
    marginTop: $defaultMargin ? spacing(1) : spacing(0),
    paddingInline: spacing(2),
  };
});

const Title = styled(Text)(({ $defaultFontsSize }) => {
  return {
    color: Colors.black,
    fontFamily: Fonts.bold,
    fontSize: $defaultFontsSize ? 14 : 16,
  };
});

export const subTitle = styled(Text)(
  ({ theme, $defaultFonts, $defaultMargin }) => {
    const { spacing } = theme;
    return {
      marginTop: $defaultMargin ? spacing(1) : spacing(2),
      marginBottom: $defaultMargin ? spacing(2) : spacing(1),
      fontFamily: $defaultFonts ? Fonts.semibold : Fonts.medium,
      fontSize: $defaultFonts ? 10 : 14,
      color: Colors.black,
    };
  }
);

const TextFieldButton = styled(ButtonContained)(
  ({ theme, $defaultFont, $defaultCancelButton }) => {
    const { spacing } = theme;
    return {
      fontFamily: $defaultFont ? Fonts.medium : Fonts.bold,
      fontSize: 14,
      color: $defaultCancelButton ? Colors.black : Colors.green,
      backgroundColor: Colors.white0,
      width: "100%",
      lineHeight: "normal",
      borderRadius: 25,
      marginTop: spacing(1),
      padding: spacing(0.8, 2),
    };
  }
);

const ButtonTableModal = styled(Button)(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: "none",
    padding: spacing(0, 1),
    ...FontStyles.bold10,
    color: Colors.black,
    lineHeight: "normal",
    borderRadius: 25,
    width: "90%",
    height: "auto",
    ".MuiButton-endIcon": {
      width: 30,
    },
    "&:hover": {
      background: "none",
      color: Colors.green,
    },
  };
});

export const InputTitle = styled(Text)(() => {
  return {
    ...FontStyles.semibold12,
    color: Colors.black,
  };
});

const textInput = styled(Input)(({ theme, $setFontSize }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: $setFontSize ? 14 : 16,
    height: "50%",
    border: "none",
    marginTop: spacing(0),
    marginLeft: spacing(-1),
  };
});
const FooterModal = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: spacing(1),
  };
});
const Styles = {
  styledBackDrop,
  Container,
  StyledIformationModal,
  ButtonTableModal,
  ModalContainer,
  ModalContent,
  HeaderContainer,
  Title,
  subTitle,
  TextFieldButton,
  InputTitle,
  textInput,
  FooterModal,
};
export default Styles;
