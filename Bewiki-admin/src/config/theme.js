import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Fonts from "./fonts";
import Colors from "./colors";

const breakpointValues = {
  xs: 320,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1600,
};

function createTheme({
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
}) {
  return createMuiTheme({
    MediaQueries: {
      xsUp: `@media only screen and (min-width: ${breakpointValues.xs + 1}px)`,
      xsDown: `@media only screen and (max-width: ${breakpointValues.xs}px)`,
      smUp: `@media only screen and (min-width: ${breakpointValues.sm + 1}px)`,
      smDown: `@media only screen and (max-width: ${breakpointValues.sm}px)`,
      mdUp: `@media only screen and (min-width: ${breakpointValues.md + 1}px)`,
      mdDown: `@media only screen and (max-width: ${breakpointValues.md}px)`,
      lgUp: `@media only screen and (min-width: ${breakpointValues.lg + 1}px)`,
      lgDown: `@media only screen and (max-width: ${breakpointValues.lg}px)`,
      xlUp: `@media only screen and (min-width: ${breakpointValues.xl + 1}px)`,
      xlDown: `@media only screen and (max-width: ${breakpointValues.xl}px)`,
    },
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 320,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
      },
    },
    palette: {
      backgroundMain: Colors.whiteBackground,
      whiteSmoke: Colors.gray2,
      black: Colors.black,
      white: Colors.white0,
      redError: Colors.redError,
      lightBlue: Colors.lightBlue,
      opacityColor: Colors.opacityColor,
      green: Colors.green,
      primary: {
        contrastText: buttonTextColor,
        main: buttonBackgroundColor,
      },
      secondary: {
        main: buttonTextColor,
        contrastText: buttonBackgroundColor,
      },
      error: {
        main: Colors.redError,
        contrastText: Colors.white0,
      },
      text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,
        tertiary: textTertiaryColor,
        disabled: textPrimaryColor + 99,
        hint: textPrimaryColor,
        divider: textPrimaryColor,
      },
      background: {
        paper: paperBackgroundColor,
        paperHover: paperColorHover,
        default: backgroundColor,
        defaultHover: contrastColor,
        secondary: secondaryBackgroundColor,
        alternative: backgroundAlternativeColor,
      },
      action: {
        active: textPrimaryColor,
        hover: textSecondaryColor + "60",
        hoverOpacity: 0.04,
        selected: contrastColor,
        selectedOpacity: 0.08,
        disabled: textDisabledColor,
        disabledBackground: backgroundDisabled,
        backgroundHover: backgroundColorHover,
        disabledOpacity: 0.38,
        focus: "#6CFF00",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
      colors: {
        white: Colors.white0,
        redError: Colors.redError,
        lightBlue: Colors.lightBlue,
        darkBlue: Colors.darkBlue,
        darkBlue2: Colors.darkBlue2,
        lightBlueInput: Colors.lightBlueInput,
      },
    },
    typography: {
      h1: {
        color: textTertiaryColor,
        fontFamily: Fonts.bold,
        fontSize: Fonts.sizes.medium,
      },

      h2: {
        color: textTertiaryColor,
        fontFamily: Fonts.roman,
        fontSize: Fonts.sizes.small,
        letterSpacing: "0.05em",
      },

      body1: {
        color: textPrimaryColor,
        fontFamily: Fonts.light,
        fontSize: "1rem",
        letterSpacing: "0.05em",
      },
      button: {
        fontFamily: Fonts.roman,
        fontSize: Fonts.sizes.small,
        color: textSecondaryColor,
        letterSpacing: "0em",
      },
    },
    shape: {
      borderRadius: 4,
    },
    overrides: {
      MuiPickersDay: {
        dayDisabled: {
          opacity: 0.3,
        },
      },
      MuiPickersMonth: {
        monthDisabled: {
          opacity: 0.3,
        },
      },
    },
  });
}

const Light = createTheme({
  backgroundColor: Colors.white1,
  secondaryBackgroundColor: Colors.white2,
  backgroundColorHover: Colors.black,
  paperBackgroundColor: Colors.white0, //mudei cor aqui para o calendario (organizar depois)
  paperColorHover: Colors.darkGray,
  backgroundAlternativeColor: Colors.grayText,
  backgroundDisabled: Colors.gray0,
  textDisabledColor: Colors.white2,
  textPrimaryColor: Colors.black, //mudei cor aqui para o calendario (organizar depois)
  textSecondaryColor: Colors.lightBlue,
  textTertiaryColor: Colors.purple,
  textQuarterlyColor: Colors.darkGrayOpacity,
  buttonTextColor: Colors.white0, //mudei cor aqui para o calendario (organizar depois)
  buttonBackgroundColor: Colors.black,
  contrastColor: Colors.green,
});

const Themes = {
  Light: responsiveFontSizes(Light),
};

export default Themes;
