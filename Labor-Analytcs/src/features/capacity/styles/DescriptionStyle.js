import styled from "styled-components";
import { FontStyles } from "../../../components";

const Dot = styled.div(({ theme, color }) => {
  const { spacing } = theme;
  return {
    height: spacing(1),
    width: spacing(1),
    backgroundColor: color,
    borderRadius: "50%",
    flexShrink: 0,
    margin: spacing(1),
  };
});

const Description = styled.p(({ theme }) => {
  return {
    ...FontStyles.medium14,
    color: theme.palette.text.primary,
    opacity: 88,
    margin: 0,
  };
});
const SubDescription = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.roman12,
    color: theme.palette.text.primary + "AC",
    margin: spacing(0, 0, 0, 1),
  };
});

const Container = styled.div(({ theme, noMargin }) => {
  const { spacing } = theme;
  return {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    margin: noMargin ? 0 : spacing(2, 0),
  };
});

const Styles = {
  Description,
  Dot,
  Container,
  SubDescription,
};

export default Styles;
