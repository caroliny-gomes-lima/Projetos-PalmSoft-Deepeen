import styled from "styled-components";
import { MediaQueries, Fonts } from "../../../../config";
import { Button, CircularProgress, Paper } from "@material-ui/core";
import {
  Text,
  Select,
  InputNumber,
  Input,
  ButtonOutlined,
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
    borderRadius: spacing(0.625),
  };
});

const HeaderContainer = styled.div((props) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "solid 3.5px",
    color: Colors.white3,
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

//---estilo de todos os componentes do cadastro(menos amenidades)
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

const HeaderContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    color: "black",
    marginTop: spacing(1),
    marginBottom: spacing(1),
  };
});

export const Title = styled(Text)(() => {
  return {
    fontWeight: "bold",
    color: Colors.green,
  };
});

export const SubTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.black,
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

//----------------------------------------------

const Line = styled.div(({ theme, $defaultMarginTop }) => {
  const { spacing } = theme;
  return {
    marginTop: $defaultMarginTop ? spacing(1) : spacing(4),
    width: "100%",
    height: spacing(0.2),
    backgroundColor: Colors.white3,
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

const Styles = {
  Container,
  HeaderContainer,
  ScrollContainer,
  LoadingContainer,
  CircleLoading,
  //---estilos de todos os componentes do cadastro
  Content,
  HeaderContent,
  Title,
  InputTitle,
  NumberInput,
  SelectInput,
  TextBox,
  HeadertextBox,
  TextInput,
  GroupInputsImage,
  Line,
  ButtomModal,
  detailsText,
  containerSwith,
  SwithLabel,
  ButtonAddItem,
  SubTitle,
};

export default Styles;
