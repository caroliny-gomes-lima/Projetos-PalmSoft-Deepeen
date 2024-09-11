import styled from "styled-components";
import { Paper, CircularProgress } from "@material-ui/core";
import { Colors, Fonts } from "../../../../config";
import { Text } from "../../../../components";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    borderRadius: spacing(0.625),
  };
});
const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflow: "auto",
    paddingRight: spacing(1),
    width: "100%",
  };
});
const Content = styled(Paper)(({ theme, $defaultheight }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1.5),
    background: Colors.white0,
    marginTop: spacing(2),
    marginRight: spacing(0),
    marginBottom: spacing(0),
    display: "flex",
    overflow: "auto",
    overflowY: "auto",
    flexDirection: "column",
    width: "100%",
    height: $defaultheight ? "44.7vh" : "auto",
  };
});

const HeaderContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    borderBottom: "solid 2px",
    color: Colors.black,
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

const CircleLoading = styled(CircularProgress)(({ theme }) => {
  return {
    "&.MuiCircularProgress-indeterminate": {
      color: Colors.black,
    },
  };
});

const BlockTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.semibold,
    color: "black",
    marginBottom: spacing(2),
  };
});

const Styles = {
  Content,
  HeaderContainer,
  Container,
  LoadingContainer,
  CircleLoading,
  ScrollContainer,
  BlockTitle,
};

export default Styles;
