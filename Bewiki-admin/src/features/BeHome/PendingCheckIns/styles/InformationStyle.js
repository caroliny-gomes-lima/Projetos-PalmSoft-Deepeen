import {
  Backdrop,
  Paper,
  Modal,
  ListItemText,
  IconButton,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import { MediaQueries } from "../../../../config";
import FontStyles from "../../../../components/styles/fontsStyles";
import Text from "../../../../components/strings/Text";

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
    bottom: 600,
    left: "50%",
    transform: "translate(-50%, 100%)",
    width: "35%",
    maxWidth: breakpoints.values.xl - 200,
    padding: spacing(2),
    backgroundColor: colors.white,
    transition: "opacity 0.2s",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",

    [MediaQueries.lgUp]: {
      width: "35%",
      bottom: 600,
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
    //flex: 1,
    marginBottom: spacing(0),
  };
});

const HeaderContainer = styled.div((props) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    //marginBottom: "20px",
  };
});

const Title = styled(Text)(({ theme, $defaultMargin }) => {
  const { spacing } = theme;
  return {
    color: "black",
    marginTop: $defaultMargin ? spacing(3) : null,
    marginBottom: spacing(0),
    ...FontStyles.bold18,
  };
});

const ButtonInfo = styled(IconButton)(() => {
  return {
    "&:hover": {
      background: "none",
    },
  };
});

const ListText = styled(ListItemText)(({ theme }) => {
  return {
    "& .MuiTypography-body1": {
      ...FontStyles.light14,
      fontSize: "0.9rem",
      color: "black",
    },
  };
});

const ButtonTableCancel = styled(Button)(({ theme }) => {
  //const { spacing } = theme;
  return {
    backgroundColor: "white",
    padding: 2,
    ...FontStyles.bold14,
    color: "black",
    lineHeight: "normal",
    borderRadius: 25,
    width: "100%",
    height: "auto",
    ".MuiButton-startIcon": {
      fill: "colors.primary.contrastText",
      width: 17,
    },
    "&:hover": {
      backgroundColor: "white",
      opacity: 0.7,
    },
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
  ButtonInfo,
  ListText,
  HeaderContainer,
  ButtonTableCancel,
};
export default Styles;
