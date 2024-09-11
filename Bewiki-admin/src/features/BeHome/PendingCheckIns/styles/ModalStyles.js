import {
  Backdrop,
  Paper,
  Modal,
  ListItemText,
  Button,
  IconButton,
} from "@material-ui/core";
import styled from "styled-components";
import { Fonts, MediaQueries } from "../../../../config";
import FontStyles from "../../../../components/styles/fontsStyles";
import Text from "../../../../components/strings/Text";
import { ButtonContained } from "../../../../components";
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

const Content = styled.div(({ theme, $defaultMargin }) => {
  const { spacing } = theme;
  return {
    borderRadius: 5,
    display: "flex",
    flexFlow: "wrap",
    flexDirection: "row",

    marginBottom: $defaultMargin ? spacing(3) : null,
    width: "49%",
    [MediaQueries.lgDown]: {
      width: "49%",
    },
    [MediaQueries.mdDown]: {
      width: "49%",
    },
    [MediaQueries.smDown]: {
      width: "49%",
    },
    [MediaQueries.xsDown]: {
      width: "100%",
    },
  };
});

const ModalContainer = styled(Paper)(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 70%)",
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

const Title = styled(Text)(({ theme, $defaultMargin, $defaultColor }) => {
  const { spacing } = theme;
  return {
    color: $defaultColor ? Colors.green : Colors.black,
    marginTop: $defaultMargin ? spacing(3) : null,
    marginBottom: spacing(0),
    ...FontStyles.bold14,
  };
});

const ListText = styled(ListItemText)(({ theme }) => {
  return {
    "& .MuiTypography-body1": {
      ...FontStyles.medium12,
      fontSize: "0.8rem",
      color: Colors.black,
    },
  };
});

const InputContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.white1,
    borderRadius: "5px",
    width: "100%",
    padding: spacing(2),
  };
});

const ButtonModal = styled(ButtonContained)(({ theme, $defaultFontColor }) => {
  const { spacing } = theme;
  return {
    backgroundColor: Colors.white0,
    padding: spacing(0),
    ...FontStyles.bold14,
    color:
      $defaultFontColor === 1
        ? Colors.green
        : $defaultFontColor === 2
        ? Colors.blue
        : Colors.black,
    width: "100%",
    "&:hover": {
      backgroundColor: Colors.white0,
      opacity: 0.7,
    },
  };
});

const ButtonTableModal = styled(Button)(({ $defaultHoverColor }) => {
  return {
    backgroundColor: "none",
    padding: 0,
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
      color: $defaultHoverColor ? Colors.green : Colors.red,
    },
  };
});

const ButtonTableTransfer = styled(Button)(({ theme }) => {
  return {
    backgroundColor: "none",
    padding: 0,
    ...FontStyles.bold10,
    color: Colors.black,
    lineHeight: "normal",
    borderRadius: 25,
    width: "90%",
    height: "auto",

    ".MuiButton-endIcon": {
      width: 17,
    },
    "&:hover": {
      color: Colors.orange,
    },
  };
});

const ButtonTableUserInfo = styled(Button)(({ theme }) => {
  return {
    backgroundColor: "none",
    padding: 0,
    ...FontStyles.bold10,
    color: Colors.black,
    lineHeight: "normal",
    borderRadius: 0,
    width: "90%",
    height: "auto",
    ".MuiButton-endIcon": {
      color: Colors.white0,
    },
    "&:hover": {
      color: Colors.orange,
    },
  };
});

const ButtonTableCancel = styled(Button)(() => {
  return {
    backgroundColor: "none",
    padding: 0,
    ...FontStyles.bold10,
    color: Colors.black,
    lineHeight: "normal",
    borderRadius: 25,
    width: "90%",
    height: "auto",
    ".MuiButton-endIcon": {
      width: 17,
    },
    "&:hover": {
      color: Colors.red,
    },
  };
});

const ButtonTableApprove = styled(Button)(() => {
  return {
    backgroundColor: "none",
    padding: 0,
    ...FontStyles.bold10,
    color: Colors.black,
    lineHeight: "normal",
    borderRadius: 25,
    width: "90%",
    height: "auto",

    ".MuiButton-endIcon": {
      width: 17,
    },
    "&:hover": {
      color: Colors.green,
    },
  };
});

const ImageContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    marginTop: spacing(5),
    marginBottom: spacing(5),
    borderRadius: spacing(0.625),
    backgroundColor: Colors.green,
  };
});
const HeaderImageContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: spacing(1),
    alignItems: "center",
  };
});
const ImageContent = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: Colors.gray3,
  };
});
const SubTitle = styled(Text)(({ theme, $defaultFonts, $defaultMargin }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.semibold,
    fontSize: 12,
    color: Colors.white0,
    paddingInline: spacing(2),
  };
});

const ArrowIconButton = styled(IconButton)(({ theme, $defaultMarginLeft }) => {
  const { spacing } = theme;
  return {
    backgroundColor: Colors.white0,
    alignSelf: "center",
    marginLeft: $defaultMarginLeft ? spacing(5) : spacing(-5),
    paddingInline: spacing(1.5),
  };
});

const Styles = {
  styledBackDrop,
  Container,
  StyledIformationModal,
  ModalContainer,
  ModalContent,
  Title,
  Content,
  ListText,
  HeaderContainer,
  ButtonModal,
  ButtonTableModal,
  ButtonTableTransfer,
  ButtonTableApprove,
  ButtonTableCancel,
  ButtonTableUserInfo,
  InputContainer,
  ImageContainer,
  HeaderImageContent,
  ImageContent,
  SubTitle,
  ArrowIconButton,
};
export default Styles;
