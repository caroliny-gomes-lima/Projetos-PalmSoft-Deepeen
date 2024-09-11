import React from "react";
import styled from "styled-components";
import FontStyles from "../styles/fontsStyles";
import SkeletonLoader from "../others/SkeletonLoader";
import Text from "../strings/Text";

const Dot = styled.div(({ theme, color }) => {
  const { spacing } = theme;
  return {
    height: spacing(1),
    width: spacing(1),
    backgroundColor: color,
    borderRadius: "50%",
    margin: spacing(0, 1),
    flexShrink: 0,
  };
});

const DotLoader = styled(SkeletonLoader)(({ theme }) => {
  const { spacing } = theme;
  return {
    height: spacing(1),
    width: spacing(1),
    margin: spacing(1),
    flexShrink: 0,
  };
});

const Description = styled(Text)(({ theme }) => {
  return {
    ...FontStyles.roman14,
    color: theme.palette.text.primary + "AC",
    margin: 0,
  };
});

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    margin: spacing(0, 1),
    flexShrink: 0,
  };
});

const DescriptionWithSub = styled.span(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.roman12,
    color: colors.text.primary,
    fontWeight: "bold",
    display: "block",
  };
});

function ChartDescription({
  loading,
  children,
  color,
  subDescription = "",
  loadingWidth = 100,
}) {
  return (
    <Container>
      {loading ? <DotLoader variant="circle" /> : <Dot color={color} />}
      <Description>
        {loading ? (
          <SkeletonLoader width={loadingWidth} />
        ) : (
          <>
            {subDescription ? (
              <DescriptionWithSub>{children}</DescriptionWithSub>
            ) : (
              children
            )}
            {subDescription}
          </>
        )}
      </Description>
    </Container>
  );
}
export default ChartDescription;
