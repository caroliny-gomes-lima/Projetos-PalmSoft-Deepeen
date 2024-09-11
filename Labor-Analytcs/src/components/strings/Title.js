import React from "react";
import { Typography } from "@material-ui/core";
import { Fonts } from "../../config";
import styled from "styled-components";

const StyledText = styled(Typography)(({ theme }) => {
  const colors = theme.palette;
  return {
    fontFamily: Fonts.bold,
    fontSize: Fonts.sizes.medium,
    color: colors.text.primary,
  };
});

function Title({ children, loading, style, loadingSizes = [], ...props }) {
  const [width = 2, height = 1] = loadingSizes;
  return loading ? (
    <div height={height} width={width}></div>
  ) : (
    <StyledText {...props}>{children}</StyledText>
  );
}

export default React.memo(Title);
