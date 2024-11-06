/* eslint-disable no-console */
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

import Colors from "./colors";

const breakpointValues = {
  xs: 0,
  ssm: 460,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1600,
  xxl: 1920,
};

function createLightTheme({
  backgroundColor,
  backgroundColorHover,
  backgroundAlternativeColor,
  paperBackgroundColor,
  paperColorHover,
  textPrimaryColor,
  textSecondaryColor,
  textTertiaryColor,
  textQuarterlyColor,
  secondaryBackgroundColor,
  buttonTextColor,
  buttonBackgroundColor,
  backgroundDisabled,
  textDisabledColor,
  contrastColor,
  inputBackgroundColor,
}: any) {
  return createTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 0,

        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
      },
      up: (key) => `@media (min-width:${breakpointValues[key]}px)`,
      down: (key) => `@media (max-width:${breakpointValues[key] - 1}px)`,
    },
    palette: {
      primary: {
        contrastText: buttonTextColor,
        main: buttonBackgroundColor,
      },
      secondary: {
        main: buttonTextColor,
        contrastText: buttonBackgroundColor,
      },
      error: {
        main: Colors.red,
        contrastText: Colors.white,
      },
      text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,

        disabled: backgroundColor,
        hint: textPrimaryColor,
      },
      background: {
        paper: paperBackgroundColor,

        default: backgroundColor,
      },
      action: {
        active: textSecondaryColor,
        hover: textSecondaryColor + "60",
        hoverOpacity: 0.04,
        selected: textSecondaryColor,
        selectedOpacity: 0.08,
        disabled: textDisabledColor,
        disabledBackground: backgroundDisabled,
        disabledOpacity: 0.38,
        focus: "#6CFF00",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },

    shape: {
      borderRadius: 4,
    },
  });
}

//TODO mudar as cores de acordo com a necessidade
const Light = createLightTheme({
  backgroundColor: Colors.darkGray,
  secondaryBackgroundColor: Colors.blue,
  backgroundColorHover: Colors.softWhite,
  paperBackgroundColor: Colors.white,
  paperColorHover: Colors.darkGray,
  backgroundAlternativeColor: Colors.softBlue,
  backgroundDisabled: Colors.grayDisabled,
  textDisabledColor: Colors.grayOpacity,
  textPrimaryColor: Colors.darkBlue,
  textSecondaryColor: Colors.blue,
  textTertiaryColor: Colors.white,
  textQuarterlyColor: Colors.grayOpacity,
  buttonTextColor: Colors.softWhite,
  buttonBackgroundColor: Colors.purple,
  contrastColor: Colors.darkBlue,
  inputBackgroundColor: Colors.white,
});

const Themes = {
  Light: responsiveFontSizes(Light),
};

export default Themes;
