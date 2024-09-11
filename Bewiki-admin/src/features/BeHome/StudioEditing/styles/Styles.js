import styled from "styled-components";
import { MediaQueries, Fonts } from "../../../../config";
import { Button, CircularProgress, Paper } from "@material-ui/core";
import {
  ButtonContained,
  ButtonOutlined,
  Input,
  InputNumber,
  Select,
  Text,
} from "../../../../components";
import { Colors } from "../../../../config";

const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: spacing(2),
    width: "100%",
    height: "80vh",
  };
});

const LoadingContainer = styled.div((props) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    margin: "auto",
  };
});

const CircleLoading = styled(CircularProgress)(() => {
  return {
    "&.MuiCircularProgress-indeterminate": {
      color: Colors.black,
    },
  };
});

const Line = styled.div(
  ({
    theme,
    $defaultMarginTop,
    $defaultmarginBottom,
    $defaultColor,
    $defaultLine,
  }) => {
    const { spacing } = theme;
    return {
      marginTop: $defaultMarginTop ? spacing(0.5) : spacing(3.5),
      marginBottom: $defaultmarginBottom ? spacing(3) : spacing(2),
      width: "100%",
      height: $defaultLine ? spacing(0.4) : spacing(0.2),
      opacity: $defaultLine ? 1 : 0.5,
      backgroundColor: $defaultColor ? Colors.black : Colors.white3,
    };
  }
);

const Container = styled(Paper)(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    padding: spacing(2),
    paddingRight: spacing(1),
    background: Colors.white0,
    width: "100%",
    height: "auto",
    marginBottom: spacing(0),
    borderRadius: spacing(0.625),
  };
});

const HeaderContainer = styled.div(({ theme, $defaultPadding }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing(1.5),
  };
});

export const Title = styled(Text)(({ $defaultFont }) => {
  return {
    fontWeight: "bold",
    fontSize: $defaultFont ? 14 : 16,
    color: $defaultFont ? Colors.black : Colors.green,
  };
});

//---estilo de todos os componentes das telas de edição de Studio
export const SubTitle = styled(Text)(({ theme, $defaultFont }) => {
  const { spacing } = theme;
  return {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    fontFamily: $defaultFont ? Fonts.medium : Fonts.bold,
    fontSize: 14,
    color: Colors.black,
  };
});

const HeaderContent = styled.div(({ theme }) => {
  return {
    display: "flex",
    color: "black",
  };
});

const Content = styled.div(({ theme, $defaultMarginTop }) => {
  const { spacing } = theme;
  return {
    padding: spacing(0),
    marginTop: $defaultMarginTop ? spacing(2) : spacing(1),
    marginBottom: spacing(1.5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});

const StudiosCards = styled.div(({ theme, $defaultMarginTop }) => {
  const { spacing } = theme;
  return {
    padding: spacing(0),
    margin: spacing(0),
    marginBottom: spacing(1.5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});

const TextsCardsContent = styled(Text)(
  ({ theme, $setMargin, $defaultFont }) => {
    const { spacing } = theme;
    return {
      fontFamily: $defaultFont ? Fonts.medium : Fonts.semibold,
      color: Colors.black,
      fontSize: $defaultFont ? 16 : 12,
      marginTop: $setMargin ? spacing(0.5) : spacing(0),
      marginBottom: $setMargin ? spacing(1) : spacing(0),
    };
  }
);

const EditStudioButton = styled(ButtonContained)(({ $defaltColor }) => {
  return {
    backgroundColor: $defaltColor ? Colors.black : Colors.green,
    color: Colors.white0,
    fontFamily: Fonts.semibold,
    fontSize: 14,
    width: "100%",
    height: "auto",
  };
});

export const InputTitle = styled(Text)(() => {
  return {
    fontFamily: Fonts.semibold,
    color: Colors.black,
    fontSize: 12,
  };
});

const NumberInput = styled(InputNumber)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: 16,
    width: "100%",
    border: "none",
    marginTop: spacing(0),
    marginLeft: spacing(-1),
  };
});

const SelectInput = styled(Select)(() => {
  return {
    fontFamily: Fonts.medium,
    fontSize: 16,
    border: "none",
  };
});

const TextBox = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    background: Colors.white3,
    padding: spacing(2),
    width: "100%",
    height: "75%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
  };
});

const HeadertextBox = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    color: Colors.black,
    marginBottom: spacing(1),
  };
});

const TextInput = styled(Input)(({ theme, $setFontSize }) => {
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

const GroupInputsImage = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    marginBottom: spacing(1),
  };
});

export const descriptionText = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingTop: spacing(0),
    paddingBottom: spacing(1),
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.black,
  };
});

const detailsText = styled.textarea(({ theme, $setFontSize }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: $setFontSize ? 14 : 16,
    height: "100%",
    border: "none",
    background: "none",
    marginTop: spacing(0),
    marginLeft: spacing(0),
    overflow: "hidden",
  };
});

const containerSwith = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1),
    marginRight: spacing(10),
    width: "50%",
    height: "auto",
  };
});

const SwithLabel = styled(Text)(() => {
  return {
    fontFamily: Fonts.semibold,
    fontWeight: "bold",
    color: Colors.black,
    fontSize: 12,
  };
});

const ButtonAddItem = styled(ButtonOutlined)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 14,
    marginTop: spacing(2),
    marginBottom: spacing(0),
    color: Colors.black,
    width: "100%",
    lineHeight: "normal",
    height: "auto",
    border: "none",
    ".MuiButton-endIcon": {
      width: 17,
    },
  };
});

const ButtomModal = styled(Button)(({ theme }) => {
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
      backgroundColor: colors.green,
      opacity: 0.8,
    },
  };
});

const BackTextButton = styled(ButtonOutlined)(
  ({ theme, $setMargin, $defaultFont }) => {
    return {
      color: Colors.black,
      fontFamily: Fonts.semibold,
      fontSize: 14,
      width: "100%",
      height: "auto",
    };
  }
);
//----------------------------------------------

const Styles = {
  ScrollContainer,
  LoadingContainer,
  CircleLoading,
  Line,
  Container,
  HeaderContainer,
  Title,
  //--componentes das telas de edição de Studio
  SubTitle,
  HeaderContent,
  Content,
  StudiosCards,
  TextsCardsContent,
  EditStudioButton,
  InputTitle,
  NumberInput,
  SelectInput,
  TextBox,
  HeadertextBox,
  TextInput,
  GroupInputsImage,
  descriptionText,
  detailsText,
  containerSwith,
  SwithLabel,
  ButtonAddItem,
  ButtomModal,
  BackTextButton,
};

export default Styles;
