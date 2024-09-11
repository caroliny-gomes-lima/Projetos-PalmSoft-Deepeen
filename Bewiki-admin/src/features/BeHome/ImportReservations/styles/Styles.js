import styled from "styled-components";
import { MediaQueries, Fonts } from "../../../../config";
import { CircularProgress, Paper } from "@material-ui/core";
import { Colors } from "../../../../config";
import InputCPF from "../../../../components/inputs/InputCPF";
import {
  Text,
  InputNumber,
  Input,
  InputEmail,
  InputDate,
} from "../../../../components";

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
    marginBottom: spacing(0),
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

//---estilo de todos os Inputs
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

const EmailInput = styled(InputEmail)(({ theme, $setFontSize }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: $setFontSize ? 14 : 16,
    height: "50%",
    border: "none",
    marginTop: spacing(1),
  };
});

const CpfInput = styled(InputCPF)(({ theme, $setFontSize }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.medium,
    fontSize: $setFontSize ? 14 : 16,
    height: "50%",
    border: "none",
    marginTop: spacing(1),
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

const Styles = {
  Container,
  HeaderContainer,
  ScrollContainer,
  LoadingContainer,
  CircleLoading,
  //---estilo de todos os Inputs
  Content,
  HeaderContent,
  Title,
  InputTitle,
  NumberInput,
  TextInput,
  Line,
  SubTitle,
  EmailInput,
  CpfInput,
  DateInput,
};

export default Styles;
