import React from "react";
import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";
import { Fonts } from "../../config";

const StyledText = styled(Typography)({
  fontFamily: Fonts.light,
});

function Text({ children, loading, loadingSizes = [], ...props }) {
  const [width = 3, height = 1] = loadingSizes;
  return loading ? (
    <Skeleton height={height} width={width}></Skeleton>
  ) : (
    <StyledText {...props}>{children}</StyledText>
  );
}

export default React.memo(Text);
