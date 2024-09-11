import styled from "styled-components";
import { FontStyles } from "../../../components";

const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  };
});

const Content = styled.div(({ theme, $isOdd }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2C3E50",
    width: "50%",
    margin: spacing(1),
    justifyContent: "space-between",
  };
});

const Square = styled.div(({ theme, color }) => {
  const { spacing } = theme;
  return {
    backgroundColor: color,
    width: spacing(17),
    height: spacing(17),
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});
const SquareContent = styled.p(({ theme, color }) => {
  return {
    ...FontStyles.medium42,
  };
});

const BottomText = styled.p(({ theme, color }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.roman12,
    opacity: "88%",
    marginLeft: spacing(1),
  };
});

const Styles = {
  Container,
  Content,
  Square,
  SquareContent,
  BottomText,
};

export default Styles;
