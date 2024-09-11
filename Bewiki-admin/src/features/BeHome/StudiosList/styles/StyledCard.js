import styled from "styled-components";
import { Text } from "../../../../components";
import { Colors, Fonts } from "../../../../config";
import { CircularProgress, Paper } from "@material-ui/core";

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 1,
    width: "100%",
    height: "auto",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1),
    background: "#FFFFFF",
    width: "100%",
    borderRadius: 5,
    marginBottom: spacing(2)
  };
});

const CardContainer = styled(Paper)(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    height: "auto",
    width: "95%",
    border: "solid 1px",
    borderColor: $defaultColor,
    borderRadius: "5px",
    margin: spacing(1),
    padding: spacing(2),
  };
});

const CardContent = styled.div(() => {
  return {
    flex: 1,
    width: "auto",
  };
});

const CardHeader = styled.div(({ $defaultColor }) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //borderBottom: "solid 1px",
    color: $defaultColor,
  };
});

const CardTitleGroup = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    marginBottom: spacing(-1),
  };
});

const CardTitle = styled(Text)(({ $dateFontSize }) => {
  return {
    fontFamily: $dateFontSize ? Fonts.medium : Fonts.bold,
    fontSize: $dateFontSize ? "12px" : "14px",
    color: "black",
  };
});

const CardIcon = styled.div(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    marginRight: spacing(1),
    color: $defaultColor,
    padding: spacing(0),
  };
});

const CardText = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: "32px",
    padding: spacing(1),
  };
});

const Line = styled.div(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    height: "1px",
    backgroundColor: $defaultColor,
    marginBlock: spacing(1.65),
    marginInline: spacing(0),
  };
});

const LoadingContainer = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    margin: "auto",
  };
});

const CircleLoading = styled(CircularProgress)(() => {
  return {
    "&.MuiCircularProgress-indeterminate": {
      color: Colors.green,
    },
  };
});

const Styles = {
  Container,
  Content,
  CardContainer,
  CardContent,
  CardHeader,
  CardTitleGroup,
  CardIcon,
  CardTitle,
  CardText,
  Line,
  LoadingContainer,
  CircleLoading,
};

export default Styles;
