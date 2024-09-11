import styled from "styled-components";
import { MediaQueries, Fonts } from "../../../config";
import { Button, Icon, makeStyles } from "@material-ui/core";
import { defaultContainerStyles } from "../../../pages/styles/defaultStyles";
import { FontStyles } from "../../../components";
import { ChevronDown } from "../../../config/icons";

const useStyles = makeStyles((theme) => {
  const { palette: colors } = theme;
  return {
    icon: {
      width: 50,
      height: 50,
      paddingRight: 2,
      fill: colors.lightBlue,
    },
  };
});

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    flex: 1,
    //overflowY: "auto",
    paddingBottom: spacing(1),
  };
});

const HeaderContent = styled.div((props) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px",
  };
});
const Content = styled.div(
  ({ theme, $startCol, $endCol, $startRow, $endRow }) => {
    const { spacing } = theme;
    return {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: spacing(2),
      paddingBottom: spacing(5),
      borderRadius: 5,
      backgroundColor: "rgba(51, 55, 76, 0.5)",
      gridColumn: $startCol && $endCol ? `${$startCol} / ${$endCol}` : null,
      gridRow: $startRow && $endRow ? `${$startRow} / ${$endRow}` : null,
      [MediaQueries.smDown]: {
        padding: spacing(2, 1),
      },

      [MediaQueries.lgDown]: {
        padding: spacing(2, 1),
        gridColumn: "unset",
        gridRow: "unset",
      },
    };
  }
);

const ButtonGroup = styled(Button)(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    //cursor: "pointer",
    padding: spacing(1),
    paddingLeft: spacing(2),
    paddingBottom: spacing(0),
    width: "100%",
  };
});

const ContainerButtonGroup = styled.div(({ theme, $withoutPadding }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    border: "solid 1px",
    borderColor: colors.lightBlue,
    paddingBottom: $withoutPadding ? 0 : spacing(1),
    marginBottom: spacing(1),
    [MediaQueries.mdDown]: {
      padding: spacing(0, 2, $withoutPadding ? 0 : 1, 2),
    },
    [MediaQueries.smDown]: {},
    "&:hover": {
      backgroundColor: colors.text.primary + 30, //cor do efeito do container do titulo quando clica
    },
  };
});

const HideGroupButtons = styled.div(({ $open }) => ({
  transition: "1s",
  overflow: "hidden",
  height: $open ? "unset" : 0,
}));

const StyledChevronDown = styled(ChevronDown)(({ theme, $open }) => {
  const { palette: colors } = theme;
  return {
    display: "flex",
    flexDirection: "flex-end",
    fill: colors.text.secondary,
    transition: ".2s",
    transform: $open ? "rotate(180deg)" : "rotate(0deg)",
  };
});

const ContentPage = styled.div(({ theme, $disabled }) => {
  const { spacing, palette: colors } = theme;
  return {
    borderTop: "solid 1px",
    //backgroundColor: "red",
    borderColor: colors.lightBlue,
    opacity: $disabled ? 0.5 : 1,
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "17px",
    marginRight: "17px",
    padding: spacing(0),
    [MediaQueries.mdDown]: {
      padding: spacing(0, 2),
    },
  };
});

const ContainerButtonPage = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "flex-start",
  marginBottom: "1px",
});
const GroupTitle = styled.p((props) => ({
  color: props.theme.palette.text.primary,
  ...FontStyles.bold14,
  marginTop: "1px",
}));

const TextButtonPage = styled.p((props) => ({
  color: props.theme.palette.text.primary,
  ...FontStyles.roman12,
  marginTop: "-13px",
  [MediaQueries.xsDown]: {},
}));

const StylShortCutsStyles = {
  useStyles,
  Container,
  HeaderContent,
  Content,
  ButtonGroup,
  ContainerButtonGroup,
  HideGroupButtons,
  GroupTitle,
  TextButtonPage,
  ContainerButtonPage,
  StyledChevronDown,
  ContentPage,
};

export default StylShortCutsStyles;
