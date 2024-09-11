import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

function ThemeProviderComponent({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeProvider>
  );
}

export default ThemeProviderComponent;
