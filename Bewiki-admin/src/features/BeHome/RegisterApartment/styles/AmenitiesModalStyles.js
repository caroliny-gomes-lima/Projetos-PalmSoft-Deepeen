import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Fonts, Colors } from "../../../../config";
import { Text } from "../../../../components";
import { Input } from "../../../../components";
import { Backdrop, Paper, Modal, Button } from "@material-ui/core";

const StyledBackDrop = styled(Backdrop)({
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
    maxHeight: "100vh",
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
  ({ theme, $defaultMarginTop, $defaultMarginBottom, $defaultColor }) => {
    const { spacing } = theme;
    return {
      color: $defaultColor ? Colors.green : Colors.black,
      marginTop: $defaultMarginTop ? spacing(2) : null,
      marginBottom: $defaultMarginBottom ? spacing(2) : spacing(0),
      ...FontStyles.bold14,
    };
  }
);

export const SubTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingTop: spacing(2),
    paddingBottom: spacing(1),
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "black",
  };
});

const TextFieldButton = styled(Button)(({ theme, $defaultFont }) => {
  const { spacing } = theme;
  return {
    fontFamily: $defaultFont ? Fonts.medium : Fonts.bold,
    fontSize: 14,
    color: Colors.black,
    width: "100%",
    marginLeft: spacing(1),
    marginTop: spacing(2),
    marginBottom: spacing(-1),
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

export const InputTitle = styled(Text)(() => {
  return {
    fontFamily: Fonts.semibold,
    fontWeight: "bold",
    color: Colors.black,
    fontSize: 12,
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

const Styles = {
  StyledBackDrop,
  Container,
  StyledIformationModal,
  ModalContainer,
  ModalContent,
  HeaderContainer,
  Title,
  SubTitle,
  TextFieldButton,
  InputTitle,
  textInput,
};
export default Styles;
