import React from "react";
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";

const StyledSkeleton = styled(Skeleton)(({ $style = {} }) => ({
  transition: "unset",
  maxWidth: "unset",
  ...$style,
}));

function SkeletonLoader({
  children,
  height,
  width,
  variant = "rect",
  ...rest
}) {
  return (
    <StyledSkeleton {...rest} height={height} width={width} variant={variant}>
      {children}
    </StyledSkeleton>
  );
}

export default SkeletonLoader;
