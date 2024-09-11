import styled from "styled-components";
import { CircularProgress, Paper } from "@material-ui/core";
import FontStyles from "../../../../components/styles/fontsStyles";
import { Text } from "../../../../components";
import { Colors } from "../../../../config";

const Container = styled(Paper)(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    padding: spacing(2),
    background: Colors.white0,
    width: "100%",
    height: "95%",
    borderRadius: spacing(0.625),
  };
});

const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflow: "auto",
    paddingRight: spacing(1),
    height: "67vh",
    width: "100%",
  };
});

const HeaderContainer = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "solid 2px",
    color: Colors.black,
  };
});

const HeaderContent = styled.div(({ theme, $setJustify, $setPadding }) => {
  return {
    display: "flex",
    alignItems: "center",
    width: "250px",
  };
});

const Title = styled(Text)(() => {
  return {
    color: Colors.black,
    ...FontStyles.bold14,
  };
});

const FilterContainer = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "250px",
  };
});

const LoadingContainer = styled.div((props) => {
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
      color: Colors.black,
    },
  };
});

const Styles = {
  ScrollContainer,
  HeaderContainer,
  HeaderContent,
  Container,
  LoadingContainer,
  Title,
  FilterContainer,
  CircleLoading,
};

export default Styles;
