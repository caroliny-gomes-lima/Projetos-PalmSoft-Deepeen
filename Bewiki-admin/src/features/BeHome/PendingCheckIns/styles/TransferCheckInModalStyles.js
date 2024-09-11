import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Fonts } from "../../../../config";
import { Text } from "../../../../components";
import { Input } from "../../../../components";
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
    padding: spacing(2),
    [MediaQueries.smDown]: {
      width: "95%",
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
  };
});

const Title = styled(Text)(({ $defaultFontsSize, $defaultColor }) => {
  return {
    color: $defaultColor ? Colors.green : Colors.black,
    fontFamily: Fonts.bold,
    fontSize: $defaultFontsSize ? 14 : 16,
  };
});

export const SubTitle = styled(Text)(
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

const TextFieldButton = styled(Button)(
  ({ theme, $defaultFont, $defaultColor }) => {
    const { spacing } = theme;
    return {
      fontFamily: $defaultFont ? Fonts.medium : Fonts.bold,
      fontSize: 14,
      color: $defaultColor ? Colors.blue : Colors.black,
      marginLeft: spacing(1),
      marginTop: spacing(2),
      marginBottom: spacing(1),

      lineHeight: "normal",
      borderRadius: 25,
      padding: spacing(0.8, 2),
      ".MuiButton-endIcon": {
        width: 17,
      },
      "&:hover": {
        opacity: 0.8,
      },
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
      color: Colors.orange,
      background: "none",
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
    paddingInline: spacing(2),
    gap: spacing(2),
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
  SubTitle,
  TextFieldButton,
  InputTitle,
  textInput,
  FooterModal,
};
export default Styles;
