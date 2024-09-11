import styled from "styled-components";
import { ButtonContained, ButtonOutlined, Text } from "../../../../components";
import { Fonts } from "../../../../config";
import { Backdrop, IconButton, Paper, Modal } from "@material-ui/core";
import { Colors } from "../../../../config";
import { Block, HowToReg, Warning } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

const CardContainer = styled(Paper)(({ theme }) => {
  const { spacing } = theme;
  return {
    height: "85%",
    width: "auto",
    borderRadius: "5px",
    margin: spacing(1),
    padding: spacing(1.5),
    background: Colors.white2,
  };
});

const CardContent = styled.div(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
  };
});

const CardHeader = styled.div(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    margin: spacing(1),
    gap: spacing(1),
  };
});

const ButtonIcon = styled(IconButton)(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "5%",
    paddingBottom: spacing(1),
  };
});

const UserInfoContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    marginLeft: spacing(0),
    paddingBottom: spacing(0),
    padding: spacing(1),
    paddingTop: spacing(0.3),
  };
});

const IconAvatar = styled(Avatar)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: 32,
    marginBottom: spacing(0.5),
    color: Colors.white0,
    backgroundColor: Colors.black,
  };
});

const IconHowToReg = styled(HowToReg)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: 18,
    color: Colors.black,
    marginRight: spacing(0.5),
  };
});

const IconBlock = styled(Block)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: 18,
    color: Colors.black,
    marginRight: spacing(0.5),
  };
});

const IconWarning = styled(Warning)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: 18,
    color: Colors.black,
    marginRight: spacing(0.5),
  };
});

const UserInfosText = styled(Text)(({ $fontType }) => {
  return {
    fontFamily:
      $fontType === 1 ? Fonts.medium : $fontType === 2 ? Fonts.semibold : null,
    fontSize: 12,
  };
});

//-------Estilo Modal---------

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
    fontSize: $defaultFontsSize ? 12 : 16,
  };
});

const TextFieldButtonAccept = styled(ButtonContained)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.blue,
    backgroundColor: Colors.white0,
    width: "auto",
    margin: spacing(1),
    lineHeight: "normal",
    borderRadius: 25,
    "&:hover": {
      background: "none",
    },
  };
});

const TextFieldButtonCancel = styled(ButtonOutlined)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.black,
    width: "auto",
    margin: spacing(1),
    lineHeight: "normal",
    borderRadius: 25,
    "&:hover": {
      background: "none",
    },
  };
});

const ButtonModal = styled(IconButton)(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    color: $defaultColor ? Colors.black : Colors.red,
    height: spacing(1.625),
    width: spacing(1.625),
    "&:hover": {
      backgroundColor: $defaultColor ? Colors.gray0 : Colors.disabledRed,
    },
  };
});

const FooterModal = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing(0),
  };
});

const Footer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    margin: spacing(1),
  };
});

const TextBox = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    background: Colors.white0,
    padding: spacing(2),
    width: "100%",
    height: "auto",
    display: "flex",
    borderRadius: 5,
  };
});

const WithoutDataBox = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBlock: spacing(2),
  };
});

const WithoutDataText = styled(UserInfosText)(() => {
  return {
    fontSize: 16,
  };
});

const UsernameContent = styled(ModalContent)(({ theme }) => {
  const { spacing } = theme;
  return {
    marginBottom: spacing(1),
  };
});

const LittleText = styled(UserInfosText)(() => {
  return {
    textTransform: "capitalize",
  };
});

const Styles = {
  CardContainer,
  CardContent,
  Footer,
  CardHeader,
  IconAvatar,
  IconHowToReg,
  IconBlock,
  IconWarning,
  UserInfosText,
  UserInfoContent,
  ButtonIcon,
  //--Modal estilo-----
  styledBackDrop,
  Container,
  StyledIformationModal,
  ModalContainer,
  ModalContent,
  HeaderContainer,
  Title,
  TextFieldButtonAccept,
  TextFieldButtonCancel,
  ButtonModal,
  FooterModal,
  TextBox,
  WithoutDataBox,
  WithoutDataText,
  UsernameContent,
  LittleText,
};

export default Styles;
