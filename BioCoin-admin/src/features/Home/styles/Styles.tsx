import styled from "styled-components";
import { FontStyles } from "../../../components";
import { Colors } from "../../../config";
import Themes from "../../../config/theme";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "space-between",
    padding: spacing(1),
    width: "100%",
    height: "auto",
  };
});

const Cards = styled.div(({ theme, $defaultCard }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: $defaultCard ? "column" : "row",
    padding: spacing(2),
    borderRadius: "23.004px",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    background: Colors.gray + 70,
    boxShadow:
      "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
  };
});

const CardsContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "Column",
    padding: spacing(1),
    width: "100%",
    height: "auto",
  };
});

const ImageBox = styled.img(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "50.79px",
    height: "47.758px",
  };
});

const CardMap = styled.div(({ theme, $src }) => {
  const { spacing } = theme;
  return {
    width: "fit-content",
    height: "60px",
    //minHeight: "181px",
    //maxHeight: "181px",
    backgroundColor: "gray",
    borderRadius: "11.371px",
    margin: "10px",
    // [`@media (max-width:${1024 - 1}px)`]: {
    //   minWidth: "100%",
    //   minHeight: "160px",
    //   maxHeight: "160px",
    //   borderRadius: "37px",
    // },

    // [`@media (max-width:${470 - 1}px)`]: {
    //   minWidth: "100%",
    //   minHeight: "85px",
    //   maxHeight: "85px",
    //   borderRadius: "20px",
    // },
  };
});

const MapFrame = styled.iframe(({ theme }) => {
  //const { spacing } = theme;
  return {
    width: "105px",
    height: "60px",
    borderRadius: "11.371px",
  };
});

const CardsHeader = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: spacing(2),
    width: "100%",
    height: "auto",
    gap: 10,
  };
});

const CardsTitle = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.regular16,
    padding: 0,
    margin: 0,
    color: colors.primary.textPrimaryColor,
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
  };
});

const CardsText = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.regular18,
    fontSize: "22.292px",
    fontWeight: 800,
    padding: 0,
    margin: 0,
    color: colors.primary.textPrimaryColor,
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
  };
});

const CardsIcon = styled.div(
  ({
    theme,
    $defaultColorGreen,
    $defaultColorlightBlue,
    $defaultColorOrange,
    $defaultColorBlue,
  }) => {
    const { spacing } = theme;
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      padding: spacing(0.5),
      width: "40px",
      height: "40px",
      border: $defaultColorGreen
        ? "0.449px solid #8FFF00"
        : $defaultColorlightBlue
        ? " 0.449px solid #00FFF0"
        : $defaultColorOrange
        ? "0.449px solid #FFE500"
        : $defaultColorBlue
        ? "0.449px solid #00B2FF"
        : null,
      borderRadius: "14.831px",
      background: $defaultColorGreen
        ? "linear-gradient(144deg, rgba(143, 255, 0, 0.80) 18.6%, rgba(255, 212, 0, 0.00) 148.99%), #04BF17"
        : $defaultColorlightBlue
        ? "linear-gradient(144deg, rgba(0, 255, 240, 0.80) 18.6%, rgba(0, 255, 240, 0.00) 148.99%), #0295B6"
        : $defaultColorOrange
        ? "linear-gradient(144deg, rgba(255, 229, 0, 0.80) 18.6%, rgba(255, 212, 0, 0.00) 148.99%), #D4A706"
        : $defaultColorBlue
        ? "linear-gradient(144deg, rgba(0, 71, 255, 0.80) 18.6%, rgba(0, 178, 255, 0.00) 148.99%), #0804BF"
        : null,
      boxShadow: $defaultColorGreen
        ? "3.14607px 3.14607px 8.53933px 0px rgba(1, 71, 0, 0.22), 0.44944px 0.44944px 2.69663px 0px rgba(1, 71, 0, 0.26), 0.89888px 0px 5.39326px 0px rgba(1, 71, 0, 0.10) inset, -0.89888px 0px 5.39326px 0px rgba(1, 71, 0, 0.10) inset"
        : $defaultColorlightBlue
        ? "3.14607px 3.14607px 8.53933px 0px rgba(0, 41, 71, 0.22), 0.44944px 0.44944px 2.69663px 0px rgba(0, 41, 71, 0.26), 0.89888px 0px 5.39326px 0px rgba(3, 151, 160, 0.10) inset, -0.89888px 0px 5.39326px 0px rgba(0, 186, 198, 0.10) inset"
        : $defaultColorOrange
        ? "3.14607px 3.14607px 8.53933px 0px rgba(255, 132, 0, 0.22), 0.44944px 0.44944px 2.69663px 0px rgba(255, 132, 0, 0.26), 0.89888px 0px 5.39326px 0px rgba(255, 132, 0, 0.10) inset, -0.89888px 0px 5.39326px 0px rgba(255, 179, 0, 0.35) inset"
        : $defaultColorBlue
        ? "3.14607px 3.14607px 8.53933px 0px rgba(0, 7, 71, 0.22), 0.44944px 0.44944px 2.69663px 0px rgba(0, 7, 71, 0.26), 0.89888px 0px 5.39326px 0px rgba(0, 7, 71, 0.10) inset, -0.89888px 0px 5.39326px 0px rgba(0, 7, 71, 0.10) inset"
        : null,
    };
  }
);
const Icon = styled.img(() => {
  return {
    width: "24px",
    height: "24px",
    alignSelf: "center",
  };
});

const Line = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    backgroundColor: colors.text.primary + 60,
    width: "auto",
    height: 1,
    marginTop: spacing(2),
    marginBottom: spacing(2),
  };
});
const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: spacing(2),
    width: "100%",
    height: "20vh",
  };
});

const NoDataContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const NoDataText = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    color: Colors.darkGray,
    ...FontStyles.regular14,

    margin: 0,
  };
});

//Áreas Preservadas Adicionadas e Vendas Recentes--------------
const ListItem = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing(1.5),
    width: "100%",
    height: "auto",
    background: Colors.gray,
    borderRadius: "11.371px",
  };
});

const Title = styled.div(({ theme, $customFontSize }) => {
  const { spacing, palette: colors } = theme;
  return {
    ...FontStyles.medium16,
    fontSize: $customFontSize ? "10px" : "22.292px",
    fontWeight: 900,
    color: colors.primary.textPrimaryColor,
  };
});

const textArea = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
  };
});

const text = styled.div(({ theme, $customText }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    color: Colors.darkGray,
    ...FontStyles.medium12,
    fontSize: $customText ? "10px" : "17.338px",
    fontWeight: 900,
  };
});

//Vendas Recentes----------------------------------------------
const iconCotnainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "center",
    //alignItems: "stretch",
    width: "35px",
    height: "35px",
    borderRadius: "13px",
    background: "#70EA07",
  };
});

const icon = styled.img(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "13px",
    height: "8px",
    alignSelf: "center",
  };
});

const RecentSalesCardsLine = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    width: 2,
    height: 50,
    marginLeft: spacing(1),
    marginRight: spacing(1),
    Color: colors.primary.textPrimaryColor,
  };
});

const LeftGroup = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "Flex-start",
    gap: 10,
    alignItems: "center",
  };
});

const UserName = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    ...FontStyles.medium16,
    fontSize: "22.292px",
    fontWeight: 900,
    color: colors.primary.textPrimaryColor,
    [Themes.Light.breakpoints.down("lg")]: {
      fontSize: "18px",
    },
  };
});

const rightGroup = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    alignItems: "center",
  };
});

//Áreas Preservadas Adicionadas------------------------------------------
const PreservedAreasCardsImageBox = styled.img(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: "10px",
    width: "80px",
    height: "55px",
    borderRadius: "11.371px",
  };
});

const Styles = {
  Container,
  Cards,
  CardsContent,
  CardsHeader,
  CardsTitle,
  CardsText,
  CardsIcon,
  Icon,
  ImageBox,
  Line,
  ScrollContainer,
  NoDataContainer,
  NoDataText,
  MapFrame,
  CardMap,
  //Áreas Preservadas Adicionadas e Vendas Recentes
  ListItem,
  Title,
  textArea,
  text,
  //Vendas Recentes---------------
  iconCotnainer,
  icon,
  RecentSalesCardsLine,
  LeftGroup,
  UserName,
  rightGroup,
  //Áreas Preservadas Adicionadas------------------
  PreservedAreasCardsImageBox,
};

export default Styles;
