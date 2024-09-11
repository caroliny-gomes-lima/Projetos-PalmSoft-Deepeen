import styled from "styled-components";
import { FontStyles, SkeletonLoader, Text } from "../../../components";

const Dot = styled.div(({ theme, color }) => {
  const { spacing } = theme;
  return {
    height: spacing(1),
    width: spacing(1),
    backgroundColor: color,
    borderRadius: "50%",
    margin: spacing(1),
  };
});

const DotLoader = styled(SkeletonLoader)(({ theme }) => {
  const { spacing } = theme;
  return {
    height: spacing(1),
    width: spacing(1),
    margin: spacing(1),
  };
});

const Description = styled(Text)(({ theme }) => {
  return {
    ...FontStyles.roman14,
    color: theme.palette.text.primary + "AC",
    margin: 0,
  };
});

const Container = styled.div({
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
});

const Styles = {
  Description,
  Dot,
  DotLoader,
  Container,
};

export default Styles;
