import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Fonts from "./fonts";
import Colors from "./colors";

const breakpointValues = {
  xs: 320,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1600,
  xxl: 1920,
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
      xxlUp: `@media only screen and (min-width: ${
        breakpointValues.xxl + 1
      }px)`,
      xxlDown: `@media only screen and (max-width: ${breakpointValues.xxl}px)`,
    },
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
      values: {
        xs: 320,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920,
      },
    },
    palette: {
      // Insert custom colors here
      white: Colors.white,
      redError: Colors.redError,
      lightBlue: Colors.lightBlue,
      darkBlue: Colors.darkBlue,
      darkOpacity: Colors.darkOpacity,
      lightBlueInput: Colors.lightBlueInput,
      darkerBlue: Colors.darkerBlue,

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
        contrastText: Colors.white,
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
        alternative: backgroundAlternativeColor,
      },
      action: {
        active: textPrimaryColor,
        //   hover: "rgba(0, 0, 0, 0.04)",
        hover: textSecondaryColor + "60",
        hoverOpacity: 0.04,
        //   selected: "rgba(0, 0, 0, 0.08)",
        selected: textSecondaryColor,
        selectedOpacity: 0.08,
        //   disabled: "rgba(0, 0, 0, 0.26)",
        disabled: textDisabledColor,
        //   disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledBackground: backgroundDisabled,
        disabledOpacity: 0.38,
        //   focus: "rgba(0, 0, 0, 0.12)",
        focus: "#6CFF00",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
      colors: {
        white: Colors.white,
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

      h3: {
        color: textTertiaryColor,
        fontFamily: Fonts.bold,
        fontSize: "2.2rem",
        letterSpacing: "0.05em",
      },
      h4: {
        color: textTertiaryColor,
        fontFamily: Fonts.roman,
        fontSize: "2.2rem",
        letterSpacing: "0.05em",
      },
      h5: {
        color: textSecondaryColor,
        fontFamily: Fonts.roman,
        fontSize: "1.4rem",
        letterSpacing: "0.05em",
      },
      h6: {
        color: textSecondaryColor,
        fontFamily: Fonts.roman,
        fontSize: "1.2rem",
        letterSpacing: "0.05em",
      },

      body1: {
        color: textPrimaryColor,
        fontFamily: Fonts.light,
        fontSize: "1rem",
        letterSpacing: "0.05em",
      },
      body2: {
        color: textQuarterlyColor,
        fontFamily: Fonts.regular,
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
  backgroundColor: "#202436",
  backgroundColorHover: Colors.softGrayHover,
  paperBackgroundColor: Colors.darkBlue,
  paperColorHover: Colors.softGray,
  backgroundAlternativeColor: Colors.grayText,
  backgroundDisabled: Colors.grayDisabled,
  textDisabledColor: Colors.white,
  textPrimaryColor: Colors.white,
  textSecondaryColor: Colors.lightBlue,
  textTertiaryColor: Colors.purple,
  textQuarterlyColor: Colors.darkGray2TextOpacity,
  buttonTextColor: Colors.white,
  buttonBackgroundColor: Colors.lightBlue,
  contrastColor: Colors.mediumBlue,
});

const Themes = {
  Light: responsiveFontSizes(Light),
};

export default Themes;
