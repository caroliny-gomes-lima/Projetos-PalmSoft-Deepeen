import styled from "styled-components";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Fonts } from "../../../../config";
import { ButtonContained, Input, Text } from "../../../../components";
import { Colors } from "../../../../config";
import { Avatar } from "@material-ui/core";
import { HowToReg } from "@material-ui/icons";

const ModalContent = styled.div(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: $defaultColor ? "space-between" : null,
    //gap: $defaultColor ? spacing(5) : null,
    marginBottom: $defaultColor === 1 ? spacing(0) : spacing(2),
    marginLeft: $defaultColor ? spacing(2) : "none",
    marginRight: $defaultColor ? spacing(2) : "none",
    backgroundColor: $defaultColor ? Colors.white0 : Colors.white1,
    padding: $defaultColor ? spacing(0.5) : spacing(3),
    borderBottom: $defaultColor ? "solid 2px" : null,
    borderColor: Colors.gray1,
    //paddingInline: spacing(3),
  };
});

const HeaderContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: spacing(0),
    marginTop: spacing(0),
    paddingInline: spacing(2),
  };
});

const Title = styled(Text)(
  ({ theme, $defaultFontsSize, $defaultColor, $defaultMargin }) => {
    const { spacing } = theme;
    return {
      color: $defaultColor ? Colors.green : Colors.black,
      fontFamily: Fonts.bold,
      fontSize: $defaultFontsSize ? 14 : $defaultFontsSize === 1 ? 12 : 16,
      textTransform: "uppercase",
      marginLeft: $defaultMargin ? spacing(1) : spacing(0),
    };
  }
);

const TextFieldButton = styled(ButtonContained)(
  ({ theme, $defaultButtonCancel }) => {
    const { spacing } = theme;
    return {
      fontFamily: Fonts.bold,
      fontSize: 14,
      color: $defaultButtonCancel ? Colors.black : Colors.green,
      backgroundColor: Colors.white0,
      width: "100%",
      lineHeight: "normal",
      borderRadius: 25,
      padding: spacing(1),
    };
  }
);

const CashBackFinalValueInfo = styled(Input)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 16,
    border: "none",
    marginTop: spacing(0),
    marginRight: spacing(2),
    width: "105%",
  };
});

export const InputTitle = styled(Text)(() => {
  return {
    ...FontStyles.semibold12,
    color: Colors.black,
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
    fontSize: 15,
    color: Colors.black,
    marginRight: spacing(0.5),
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

const UserInfosText = styled(Text)(({ $fontType }) => {
  return {
    fontFamily:
      $fontType === 1 ? Fonts.medium : $fontType === 2 ? Fonts.semibold : null,
    fontSize: 12,
  };
});

const FooterModal = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    //justifyContent: "space-between",
    flexWrap: "wrap",
    margin: spacing(1),
  };
});

const ButtonTableModal = styled(ButtonContained)(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    backgroundColor: $defaultColor ? Colors.white0 : Colors.black,
    padding: spacing(0.6, 1),
    paddingRight: spacing(0),
    ...FontStyles.bold10,
    color: $defaultColor ? Colors.black : Colors.white0,
    lineHeight: "normal",
    border: "solid 2px",
    borderColor: Colors.black,
    borderRadius: 25,
    width: "100%",
    height: "auto",
    ".MuiButton-endIcon": {
      width: 30,
    },
    "&:hover": {
      backgroundColor: Colors.gray3,
      opacity: 0.5,
    },
  };
});

const Group = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  };
});

const Styles = {
  ModalContent,
  HeaderContainer,
  Title,
  TextFieldButton,
  CashBackFinalValueInfo,
  InputTitle,
  IconAvatar,
  FooterModal,
  ButtonTableModal,
  IconHowToReg,
  UserInfoContent,
  UserInfosText,
  Group,
};
export default Styles;
