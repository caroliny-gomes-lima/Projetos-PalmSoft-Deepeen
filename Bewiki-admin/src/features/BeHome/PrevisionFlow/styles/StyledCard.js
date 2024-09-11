import styled from "styled-components";
import { Text } from "../../../../components";
import { Fonts } from "../../../../config";
import { Paper } from "@material-ui/core";
import { Colors } from "../../../../config";

const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "auto",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1.5),
    background: Colors.white0,
    width: "100%",
    borderRadius: 5,
  };
});

const CardContainer = styled(Paper)(({ theme, $setBorderColor }) => {
  const { spacing } = theme;
  return {
    height: "135px",
    width: "auto",
    border: "solid 1px",
    borderColor:
      $setBorderColor === 1
        ? Colors.orange
        : null || $setBorderColor === 2
        ? Colors.green
        : null || $setBorderColor === 3
        ? Colors.gray2
        : null,
    borderRadius: "5px",
    margin: spacing(1),
    padding: spacing(2),
    marginTop: spacing(3),
    marginLeft: spacing(0),
    marginRight: spacing(0),
  };
});

const CardContent = styled.div(() => {
  return {
    flex: 1,
    width: "auto",
  };
});

const CardHeader = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
  };
});

const CardTitleGroup = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    marginBottom: spacing(-1),
    width: "100%",
  };
});

const CardTitle = styled(Text)(
  ({ theme, $dateFontSize, $setMarginLeft, $setFlex }) => {
    return {
      alignSelf: "center",
      fontFamily: $dateFontSize ? Fonts.medium : Fonts.bold,
      fontSize: $dateFontSize ? "0.6rem" : "0.7rem",
      color: Colors.black,
    };
  }
);

const CardIcon = styled.div(({ theme, $setIconColor }) => {
  const { spacing } = theme;
  return {
    marginRight: spacing(1),
    color:
      $setIconColor === 1
        ? Colors.orange
        : null || $setIconColor === 2
        ? Colors.green
        : null || $setIconColor === 3
        ? Colors.gray2
        : null,
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

const Line = styled.div(({ theme, $setLineColor }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    height: "1px",
    backgroundColor:
      $setLineColor === 1
        ? Colors.orange
        : null || $setLineColor === 2
        ? Colors.green
        : null || $setLineColor === 3
        ? Colors.gray2
        : null,
    marginBlock: spacing(1.65),
    marginInline: spacing(0),
  };
});

const Title = styled(Text)(() => {
  return {
    fontFamily: Fonts.bold,
    fontSize: Fonts.sizes.small,
    color: Colors.black,
  };
});

const DateText = styled(Text)(({ theme, $small }) => {
  const { spacing } = theme;
  return {
    fontFamily: $small ? Fonts.medium : Fonts.semibold,
    fontSize: Fonts.sizes.smaller,
    color: Colors.black,
    padding: 0,
    margin: 0,
    marginInline: spacing(1.25),
  };
});

const BlackLine = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    border: "0.5px solid #303036",
    width: "100%",
    marginTop: spacing(1.25),
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
  Title,
  DateText,
  BlackLine,
};

export default Styles;
