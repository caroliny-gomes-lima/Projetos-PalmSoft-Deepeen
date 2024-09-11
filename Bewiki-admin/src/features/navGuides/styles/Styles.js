import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Colors, Fonts, MediaQueries } from "../../../config";
import { makeStyles, Paper } from "@material-ui/core";
import { FontStyles } from "../../../components";
import { ExpandMore, Notifications } from "@material-ui/icons";

const useStyles = makeStyles((theme, $defaultMargin) => {
  const { spacing } = theme;
  return {
    icon: {
      width: "6.25rem",
      height: "auto",
      marginLeft: spacing(2.5),
    },
  };
});

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: spacing(2),
    marginLeft: spacing(3.5),
  };
});
const ScrollContainer = styled.div(() => {
  return {
    height: "100vh",
    overflowY: "auto",
  };
});
const NavigationContainer = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    [MediaQueries.mdDown]: {
      display: "none",
    },
  };
});

const CardNavigation = styled(Paper)(
  ({ theme, $defaultPadding, $defaultMargin }) => {
    const { spacing, palette: colors } = theme;
    return {
      backgroundColor: colors.secondary.main,
      borderRadius: spacing(0.625),
      padding: $defaultPadding ? spacing(1) : spacing(2.375, 0),
      paddingLeft: $defaultPadding ? spacing(0) : null,
      paddingRight: $defaultPadding ? spacing(0) : null,
      marginTop: $defaultMargin ? spacing(1.5) : null,
      width: "95%",
    };
  }
);
const ButtonContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    marginBottom: spacing(0.625),
    ...FontStyles.bold10,
  };
});

const ButtonContained = styled(Button)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    color: colors.secondary.main,
    backgroundColor: colors.action.backgroundHover,
    borderRadius: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBlock: spacing(2.25),
    paddingInline: spacing(2.5),
    fontFamily: Fonts.bold,
    fontSize: 12,
    "&:hover": {
      backgroundColor: colors.action.backgroundHover,
      color: colors.secondary.main,
    },
  };
});

const ButtonOutlined = styled(Button)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    color: colors.action.active,
    backgroundColor: colors.background.secondary,
    borderRadius: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBlock: spacing(2.25),
    paddingInline: spacing(2.5),
    fontFamily: Fonts.bold,
    fontSize: 12,
    "&:hover": {
      backgroundColor: colors.action.disabledBackground,
    },
  };
});

const Line = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "85%",
    height: "1px",
    backgroundColor: "black",

    marginBlock: spacing(1.75),
    marginInline: spacing(2.5),
  };
});

const NotificationContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: "#1FC299",
    color: "black",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    padding: spacing(0.7),
    lineHeight: "normal",
    width: "16%",
    height: "auto",
  };
});

const NotificationIcon = styled(Notifications)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    fill: colors.white,
    width: 17,
  };
});

const NotificationValue = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    ...FontStyles.bold10,
    color: colors.secondary.main,
    padding: spacing(0.7),
    marginRight: spacing(-10),
  };
});

const MenuTitleButton = styled(Button)(({ theme, $defaultFont }) => {
  const { spacing } = theme;
  return {
    fontFamily: $defaultFont ? Fonts.medium : Fonts.bold,
    fontSize: 14,
    color: Colors.black,
    display: "flex",
    justifyContent: "space-between",
    marginTop: spacing(2),
    marginLeft: spacing(1),
    width: "100%",
    ".MuiButton-endIcon": {
      width: 17,
    },
    "&:hover": {
      opacity: 0.8,
    },
  };
});

const HeaderCardNavigation = styled.div(({ theme, $defaultMargin }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: spacing(1.5),
    paddingInline: spacing(1),
  };
});

const IconExpandMore = styled(ExpandMore)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: 25,
    color: Colors.black,
    marginLeft: spacing(1),
  };
});

const Styles = {
  Container,
  ScrollContainer,
  NavigationContainer,
  ButtonContainer,
  ButtonContained,
  ButtonOutlined,
  CardNavigation,
  Line,
  useStyles,
  NotificationContainer,
  NotificationIcon,
  NotificationValue,
  MenuTitleButton,
  HeaderCardNavigation,
  IconExpandMore,
};

export default Styles;
