import styled from "styled-components";
import { MediaQueries, Fonts } from "../../../../config";
import { Button, CircularProgress, Paper } from "@material-ui/core";
import {
  ButtonContained,
  ButtonOutlined,
  Input,
  InputDate,
  InputNumber,
  Select,
  Text,
} from "../../../../components";
import { Colors } from "../../../../config";
import FontStyle from "../../../../components/styles/fontsStyles";
import { Block, Forward, KeyboardArrowLeft } from "@material-ui/icons";

const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflowY: "auto",
    overflowX: "hidden",
    padding: spacing(1, 2),
    width: "100%",
    minHeight: "80vh",
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

const Line = styled.div(({ theme }) => {
    const { spacing } = theme;
    return {
      marginTop: spacing(1.5),
      width: "100%",
      height: spacing(0.1),
      backgroundColor: Colors.black,
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

const HeaderContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing(1.5),
    cursor: "pointer"
  };
});

export const Title = styled(Text)(({ theme, $first, $principal }) => {
  const { spacing } = theme;
  return {
    textTransform: "uppercase",
    color: $principal ? Colors.black : Colors.green,
    fontFamily: Fonts.bold,
    fontSize: $principal ? 14 : 16,
    marginTop: $first ? spacing(0) : spacing(3),
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
    textTransform: "uppercase",
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

const DateInput = styled(InputDate)(({ theme, $setFontSize }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: $setFontSize ? 14 : 16,
    height: "50%",
    border: "none",
    padding: spacing(1),
    marginTop: spacing(0),
  };
});

const GrayContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1.5),
    backgroundColor: "#F3F3F3",
    borderRadius: spacing(0.75)
  };
});

const DescriptionText = styled(Text)(() => {
  return {
    ...FontStyle.medium14,
    color: Colors.black,
  };
});

const SelectContainer = styled.div(() => {
  return {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "flex-end", 
  };
});

const SelectContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: Colors.green,
    borderRadius: spacing(2),
    padding: spacing(0, 1, 0, 2),
    height: spacing(4)
  };
});

const SelectText = styled(Text)(() => {
  return {
    ...FontStyle.extrabold12,
    color: Colors.white0,
  };
});

const TableButton = styled(ButtonContained)(({ theme, $cancel }) => {
  const { spacing } = theme;
    return {
      backgroundColor: $cancel ? Colors.black : Colors.green,
      ...FontStyle.semibold10,
      padding: spacing(0.5, 1.5),
      color: Colors.white0,
      width: "auto",
      marginRight: $cancel ? spacing(0.5) : 0,
      "&:hover": {
        backgroundColor: $cancel ? "#303036 !important" : "#1FC299 !important",
        color: "#FFFFFF !important",
      },
    };
  }
);

const CancelIcon = styled(Block)(({ theme }) => {
  const { spacing } = theme;
    return {
      height: 14, 
      width: 14, 
      margin: spacing(0, 0, -0.3, 0.75)
    };
  }
);

const TransferIcon = styled(Forward)(({ theme }) => {
  const { spacing } = theme;
    return {
      height: 14, 
      width: 14, 
      margin: spacing(0, 0, -0.3, 0.75)
    };
  }
);

const GoBackIcon = styled(KeyboardArrowLeft)(({ theme }) => {
  const { spacing } = theme;
    return {
      marginRight: spacing(1), 
      height: 18, 
      width: 18,
      fill: Colors.black
    };
  }
);

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
  detailsText,
  containerSwith,
  SwithLabel,
  ButtonAddItem,
  ButtomModal,
  BackTextButton,
  DateInput,
  GrayContent,
  DescriptionText,
  SelectContainer,
  SelectContent,
  SelectText,
  TableButton,
  CancelIcon,
  TransferIcon,
  GoBackIcon,
};

export default Styles;
