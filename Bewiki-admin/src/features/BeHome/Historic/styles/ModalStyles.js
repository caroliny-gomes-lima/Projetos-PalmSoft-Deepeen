import styled from "styled-components";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Fonts } from "../../../../config";
import { Text } from "../../../../components";
import { ButtonContained } from "../../../../components";
import { Button } from "@material-ui/core";
import { Colors } from "../../../../config";

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  };
});
const FooterModal = styled.div(({ theme, $defaultPadding }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing(0),
  };
});

const ModalContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: spacing(2),
    backgroundColor: Colors.white1,
    padding: spacing(3),
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

const Title = styled(Text)(({ $defaultFontsSize, $defaultColor }) => {
  return {
    color: $defaultColor ? Colors.green : Colors.black,
    fontFamily: Fonts.bold,
    fontSize: $defaultFontsSize ? 14 : 16,
    textTransform: "uppercase",
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
      paddingInline: spacing(2),
    };
  }
);

const TextFieldButtonAccept = styled(ButtonContained)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.green,
    backgroundColor: Colors.white1,
    width: "auto",

    borderRadius: 25,
    padding: spacing(0.8, 1),
  };
});

const TextButton = styled(ButtonContained)(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: $defaultColor ? Colors.black : Colors.blue,
    backgroundColor: "white",
    width: "auto",
    borderRadius: 25,
    padding: spacing(0.8, 2),
  };
});

const ButtonTableModal = styled(Button)(
  ({ theme, $defaultColor, $defaultBorder, $defaultFontColor }) => {
    const { spacing } = theme;
    return {
      backgroundColor:
        $defaultColor === 1
          ? Colors.green
          : $defaultColor === 2
          ? Colors.white1
          : $defaultColor === 3
          ? Colors.black
          : null,
      padding: spacing(0.6),
      paddingLeft: spacing(2),
      ...FontStyles.bold10,
      color: $defaultFontColor ? Colors.red : Colors.white0,
      border: $defaultBorder ? "solid 2px" : null,
      borderColor: $defaultBorder ? Colors.red : null,
      borderRadius: 25,
      width: "100%",
      height: "auto",
      lineHeight: "normal",
      ".MuiButton-endIcon": {
        width: 30,
      },
      "&:hover": {
        background:
          $defaultColor === 1
            ? Colors.green
            : $defaultColor === 2
            ? Colors.white1
            : $defaultColor === 3
            ? Colors.black
            : null,
        opacity: 0.5,
      },
    };
  }
);

export const InputTitle = styled(Text)(() => {
  return {
    ...FontStyles.semibold12,
    color: Colors.black,
  };
});

const Styles = {
  Container,
  ButtonTableModal,
  ModalContent,
  HeaderContainer,
  Title,
  SubTitle,
  TextFieldButtonAccept,
  TextButton,
  InputTitle,
  FooterModal,
};
export default Styles;
