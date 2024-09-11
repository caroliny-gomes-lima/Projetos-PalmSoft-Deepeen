import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Fonts } from "../../../../config";
import { ButtonContained, Text } from "../../../../components";
import { Input } from "../../../../components";
import { Backdrop, Paper, Modal, Button, IconButton } from "@material-ui/core";
import { Reorder } from "@material-ui/icons";
import { Colors } from "../../../../config";

const styledBackDrop = styled(Backdrop)({
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: Colors.opacityColor,
});

const StyledIformationModal = styled(Modal)({
  outlineWidth: 0,
  borderWidth: 0,
  overflow: "hidden",
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
    maxWidth: "60vw",
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
      width: `calc(80vw - ${spacing(2)}px)`,
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
    overflowY: "auto",
  };
});

const HeaderContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  };
});

const Title = styled(Text)(
  ({ theme, $defaultMarginTop, $defaultMarginBottom }) => {
    const { palette: colors, spacing } = theme;
    return {
      marginTop: $defaultMarginTop ? spacing(3) : spacing(0),
      marginBottom: $defaultMarginBottom ? spacing(1) : spacing(0),
      color: colors.black,
      ...FontStyles.bold14,
    };
  }
);

export const SubTitle = styled(Text)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    paddingTop: spacing(2),
    paddingBottom: spacing(1),
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.black,
  };
});

const AddButton = styled(Button)(({ theme, $defaultButtonCancel }) => {
  const { spacing, palette: colors } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 12,
    backgroundColor: colors.green,
    color: colors.white,
    width: "100%",
    marginLeft: spacing(1),
    marginBottom: spacing(-1),
    lineHeight: "normal",
    borderRadius: 25,
    padding: spacing(0.8, 2),
    ".MuiButton-startIcon": {
      width: 17,
    },
    "&:hover": {
      backgroundColor: $defaultButtonCancel ? colors.black : colors.green,
      color: $defaultButtonCancel ? colors.white : null,
      opacity: 0.5,
    },
  };
});

const TextFieldButton = styled(ButtonContained)(
  ({ theme, $defaultButtonCancel }) => {
    const { spacing, palette: colors } = theme;
    return {
      fontFamily: Fonts.bold,
      fontSize: 14,
      color: $defaultButtonCancel ? colors.black : Colors.blue,
      backgroundColor: Colors.white0,
      width: "100%",
      borderRadius: 25,
      padding: spacing(0.8, 1),
    };
  }
);

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

const IconButtom = styled(IconButton)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    backgroundColor: colors.black,
    color: colors.white,
    padding: spacing(1.5),
    marginRight: null,
    marginTop: spacing(2),
    marginBottom: spacing(-2),
    borderRadius: 25,
    width: "1%",
    height: "2%",
    "&:hover": {
      backgroundColor: colors.black,
      opacity: 0.8,
    },
  };
});

const InputContainer = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.background.default,
    borderRadius: "5px",
    width: "100%",
    padding: spacing(2),
    marginBottom: spacing(2),
  };
});

const IconReorder = styled(Reorder)(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: spacing(0),
    marginBottom: spacing(0),
    marginTop: spacing(5),
    marginRight: spacing(-1),
  };
});

export const InputTitle = styled(Text)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    fontFamily: Fonts.semibold,
    fontWeight: "bold",
    color: colors.black,
    fontSize: 12,
  };
});

const CodeInput = styled(Input)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: 16,
    borderBottom: "solid 1px",
    width: "103%",
    border: "none",
    marginTop: spacing(0),
    marginLeft: spacing(-1),
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
  SubTitle,
  AddButton,
  TextFieldButton,
  CodeInput,
  InputTitle,
  InputContainer,
  deleteTextFieldButton,
  IconButtom,
  IconReorder,
};
export default Styles;
