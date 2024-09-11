import styled from "styled-components";
import { CircularProgress, Paper } from "@material-ui/core";
import { Fonts, Colors } from "../../../../config";
import { Text } from "../../../../components";

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
    height: "68vh",
    width: "100%",
  };
});
const HeaderContainer = styled.div((props) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "solid 2px",
    color: Colors.black,
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

export const FilterTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingTop: spacing(2),
    paddingBottom: spacing(1),
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
  Container,
  ScrollContainer,
  HeaderContainer,
  FilterContainer,
  FilterTitle,
  LoadingContainer,
  CircleLoading,
};

export default Styles;
