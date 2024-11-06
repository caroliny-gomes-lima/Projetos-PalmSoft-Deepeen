import styled from "styled-components";
import { Button, makeStyles } from "@material-ui/core";
import { FontStyles } from "../../../components";
import { Colors } from "../../../config";

const useStyles = makeStyles((theme) => {
  const { palette: colors, spacing } = theme;
  return {
    icon: {
      paddingRight: spacing(0.625),
      width: spacing(3),
      height: spacing(3),
      marginRight: spacing(0.5),

      fill: "black",
      filter: "invert(1)",
      minWidth: 24,
    },
    subicon: {
      paddingRight: spacing(0.625),
      width: "auto",
      height: "0.8rem",
      marginRight: spacing(0.5),
    },
    iconFill: {
      paddingRight: spacing(0.625),
      width: "1.5rem",
      height: "1.5rem",
      marginRight: spacing(0.5),
      fill: "green",
    },
  };
});

const Container = styled.div(({ theme }) => {
  const { palette: colors, breakpoints } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100vh",
    width: "min-content",
    justifyContent: "space-between",
    background: "#7A12F5 0% 0% no-repeat padding-box",
    position: "relative",
    boxShadow: "0px 0px 4px #00000014",
    maxWidth: "20vw",
    minWidth: "20vw",
    zIndex: 90,
    [breakpoints.down("sm")]: {
      maxWidth: "100vw",
      minWidth: "20vw",
    },
  };
});

const ShowQuery = styled.div(({ theme }) => {
  const { palette: colors, breakpoints } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100vh",
    width: "min-content",
    backgroundColor: Colors.purple,
    position: "relative",
    boxShadow: "0px 0px 4px #00000014",
    maxWidth: "20vw",
    minWidth: "20vw",
    zIndex: 90,
    [breakpoints.down("xxl")]: {
      width: 0,
      maxWidth: 0,
      minWidth: 0,
    },
  };
});

const Background = styled.div((props) => {
  return {
    marginLeft: "auto",
    height: "100%",
  };
});

const SubLogo = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    ...FontStyles.bold16,
    marginInline: spacing(3),
    letterSpacing: 1,
    fontWeight: "600",
    color: colors.text.primary,
    marginTop: spacing(3),
  };
});

const Line = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    backgroundColor: colors.white,
    width: "100%",
    height: 1,
  };
});

const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflow: "auto",
    width: "100%",
    marginRight: spacing(3.75),
  };
});

const Group = styled.div(({ theme, $withoutPadding }) => {
  const { spacing, breakpoints } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    paddingBottom: $withoutPadding ? 0 : spacing(1),
    marginTop: spacing(2),
    [breakpoints.down("md")]: {
      padding: spacing(0, 2, $withoutPadding ? 0 : 1, 2),
    },
  };
});

const GroupTitle = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    margin: 0,
    color: colors.primary.contrastText,
    ...FontStyles.bold16,
  };
});

const GroupNameContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

const GroupTitleContainer = styled.div(({ theme }) => {
  const { spacing, breakpoints } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing(0, 5),
    marginBottom: spacing(1),
    [breakpoints.down("md")]: {
      padding: spacing(0, 2),
    },
  };
});

const NavigationButton = styled(Button)(
  ({
    theme,
    $changeColor
  }) => {
    const { spacing, palette: colors, breakpoints } = theme;
    return {
      "&&.MuiButton-root": {
        display: "flex ",
        justifyContent: "flex-start ", // Alinha o conteúdo à esquerda
        alignItems: "center ", // Certifica-se de que o ícone e o texto estão alinhados verticalmente
        padding: "10px ",
        backgroundColor: $changeColor ? colors.background.paper : colors.primary.main,
        color: $changeColor ? colors.primary.main : colors.primary.contrastText,
        borderRadius: "5px",
        border: "solid 2px white",
        textTransform: "none",
        "&&": {
          ...FontStyles.light14, // Aplica o estilo de fonte
        },
        "& svg": {
          width: "20px", // Define o tamanho do ícone
          height: "20px", // Define a altura do ícone
          marginRight: "8px", // Espaçamento entre o ícone e o texto
          fill: "currentColor", // Usa a cor atual do texto para o ícone
        },
        "&:hover": {
          backgroundColor: colors.primary.contrastText,
          color: colors.primary.main,
          "& svg": {
            width: "20px",
            height: "20px",
            marginRight: "8px",
            fill: "currentColor",
          },
        },
        [breakpoints.down("md")]: {
          padding: spacing(0, 1),
          marginLeft: 0,
        },
      }
    };
  }
);

const LeaveButton = styled(Button)(
  ({
    theme,
  }) => {
    const { spacing, palette: colors, breakpoints } = theme;
    return {
      "&&.MuiButton-root": {
        width: "58%",
        display: "flex ",
        justifyContent: "flex-start ", // Alinha o conteúdo à esquerda
        alignItems: "center ", // Certifica-se de que o ícone e o texto estão alinhados verticalmente
        padding: "10px ",
        backgroundColor: "#10265A",
        color: colors.primary.contrastText,
        borderRadius: "5px",
        textTransform: "none",
        "&&": {
          ...FontStyles.light14, // Aplica o estilo de fonte
        },
        "& svg": {
          width: "20px", // Define o tamanho do ícone
          height: "20px", // Define a altura do ícone
          marginRight: "8px", // Espaçamento entre o ícone e o texto
          fill: "currentColor", // Usa a cor atual do texto para o ícone
        },
        [breakpoints.down("md")]: {
          padding: spacing(0, 1),
          marginLeft: 0,
        },
      }
    };
  }
);

const PageContent = styled.div(({ theme, alternative, $currentPage }) => {
  const { spacing, palette: colors } = theme;
  return {
    color: !alternative ? colors.primary.contrastText : colors.primary.main,
    ...FontStyles.medium14,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: spacing(3),
    width: "max-content",
    marginBlock: spacing(0.25),
    backgroundColor: alternative && "white",
    paddingInline: alternative && spacing(2),
    paddingBlock: alternative && spacing(0.4),
    borderRadius: alternative && spacing(20),
  };
});

const Premium = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    background: "white",
    color: colors.text.tertiary,
    borderRadius: spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing(0, 2),
  };
});

const SubGroup = styled.div(({ theme, props }) => {
  const { spacing, palette: colors } = theme;
  return {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    gap: spacing(1),
    overflow: "hidden",
    height: "unset",
  }
});

const ContactContent = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    width: "100%",
    padding: spacing(3.5),
    backgroundColor: colors.background.input,
  };
});

const TitleModal = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.bold14,
    textTransform: "uppercase",
    color: colors.text.secondary,
  };
});

const InfoModal = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.medium16,
    color: colors.text.secondary,
  };
});

const ModalPadding = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingInline: spacing(3.5),
    overflow: "auto",
    height: "100%",
  };
});

const Notification = styled.p(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.bold10,
    color: colors.text.tertiary,
    backgroundColor: colors.white,
    borderRadius: spacing(1.25),
    letterSpacing: spacing(0.041),
    padding: spacing(0.25, 1.5),

    marginRight: spacing(1.25),
  };
});

const BlueBullet = styled.li(({ theme }) => {
  const { palette: colors } = theme;
  return {
    color: colors.blue,
    fontSize: 20,
  };
});

const Header = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    filter: "brightness(0) invert(1)",
    padding: spacing(3.5, 2.2),
    paddingLeft: spacing(5),
    paddingBottom: spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
});

const Icon = styled.img(({ theme, $color }) => {
  const { spacing } = theme;
  return {
    paddingRight: spacing(0.625),
    width: spacing(3),
    height: spacing(3),
    marginRight: spacing(0.5),

    filter:
      $color === 2
        ? "invert(15%) sepia(0%) saturate(2790%) hue-rotate(256deg) brightness(106%) contrast(81%)"
        : $color === 1
          ? "invert(49%) sepia(94%) saturate(313%) hue-rotate(75deg) brightness(98%) contrast(93%)"
          : "invert(1)",

    minWidth: 24,
  };
});

const Styles = {
  Header,
  Container,
  Background,
  SubLogo,
  Line,
  GroupTitle,
  Group,
  GroupNameContainer,
  useStyles,
  GroupTitleContainer,
  SubGroup,
  ScrollContainer,

  Premium,
  ContactContent,
  InfoModal,
  TitleModal,
  ModalPadding,
  Notification,
  PageContent,
  BlueBullet,
  ShowQuery,
  NavigationButton,
  Icon,
  LeaveButton
};

export default Styles;
