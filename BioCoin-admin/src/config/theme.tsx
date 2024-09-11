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
        contrastText: textPrimaryColor,
        main: paperBackgroundColor,
      },
      secondary: {
        main: secondaryBackgroundColor,
        contrastText: buttonTextColor,
      },
      error: {
        main: Colors.redError,
        contrastText: Colors.white,
      },
      text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,

        disabled: textPrimaryColor + 99,
        hint: textPrimaryColor,
      },
      background: {
        paper: paperBackgroundColor,
        default: backgroundColor,
      },
      action: {
        active: textTertiaryColor,
        hover: textTertiaryColor + "60",
        hoverOpacity: 0.04,
        selected: textTertiaryColor,
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
  backgroundColor: Colors.white,
  secondaryBackgroundColor: Colors.darkerGray,
  backgroundColorHover: Colors.lightGray,
  paperBackgroundColor: Colors.whiteSmoke,
  paperColorHover: Colors.gray,
  //backgroundAlternativeColor: Colors.softBlue,
  backgroundDisabled: Colors.gray,
  textDisabledColor: Colors.gray,
  textPrimaryColor: Colors.black,
  textSecondaryColor: Colors.white,
  textTertiaryColor: Colors.yellow,
  //textQuarterlyColor: Colors.darkGray2TextOpacity,
  buttonTextColor: Colors.lightBlue,
  buttonBackgroundColor: Colors.darkerGray,
  //contrastColor: Colors.mediumBlue,
  inputBackgroundColor: Colors.white,
});

const Themes = {
  Light: responsiveFontSizes(Light),
};

export default Themes;
