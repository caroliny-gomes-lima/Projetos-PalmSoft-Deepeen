import styled from "styled-components";
import { Fonts } from "../../../../config";
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
    height: "100%",
    borderRadius: spacing(0.625),
  };
});
const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflow: "auto",
    paddingRight: spacing(1),
    height: "73vh",
    width: "100%",
  };
});
const HeaderContainer = styled.div(() => {
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

const HeaderContent = styled.div(() => {
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
    width: "100%",
    paddingBottom: 5,
  };
});

export const FilterTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingTop: spacing(2),
    paddingBottom: spacing(0),
    fontFamily: Fonts.semibold,
    fontSize: 12,
    color: Colors.black,
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
      color: Colors.black,
    },
  };
});

const Styles = {
  HeaderContainer,
  HeaderContent,
  Container,
  LoadingContainer,
  Title,
  FilterContainer,
  FilterTitle,
  CircleLoading,
  ScrollContainer,
};

export default Styles;
