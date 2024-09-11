import styled from "styled-components";
import { CircularProgress, Paper } from "@material-ui/core";
import { FontStyles, Text } from "../../../../components";
import { Colors, Fonts } from "../../../../config";
import { LibraryBooks, HowToReg, Info } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const Container = styled.div(() => {
  return {
    height: "89vh",
    display: "flex",
    flexDirection: "column",
    width: "auto",
  };
});

//---Estilos dos filtros---//
const HeaderContainer = styled.div(
  ({ theme, $setBorderBottom, $marginBottom, $marginTop }) => {
    const { spacing } = theme;
    return {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: $setBorderBottom ? "solid 2px" : null,
      color: Colors.white3,
      marginTop: $marginTop ? spacing(1) : null,
      marginBottom: $marginBottom ? spacing(2) : spacing(-1),
    };
  }
);

const HeaderContent = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    width: "250px",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(0),
    display: "flex",
    flexWrap: "wrap",
    marginBottom: spacing(0),
  };
});

const Title = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    color: Colors.black,
    ...FontStyles.bold14,
    marginBottom: spacing(1),
  };
});

const SubTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    color: Colors.black,
    ...FontStyles.semibold12,
    marginBottom: spacing(0.5),
  };
});

const FiltersCard = styled(Paper)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    backgroundColor: colors.secondary.main,
    borderRadius: spacing(0.625),
    padding: spacing(2),
    margin: spacing(0),
    marginTop: spacing(0),
    marginBottom: spacing(2),
    width: "100%",
  };
});

const IconGeralData = styled(LibraryBooks)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: 18,
    marginRight: spacing(0.5),
    marginBottom: spacing(0.5),
    color: Colors.black,
  };
});

const CardContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexWrap: "wrap",
    marginTop: spacing(1),
    marginBottom: spacing(3),
    width: "100%",
  };
});

const IconRegistry = styled(HowToReg)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: 18,
    marginRight: spacing(0.5),
    marginBottom: spacing(0.5),
    color: Colors.black,
  };
});

const IconBlackList = styled(Info)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontSize: 18,
    marginRight: spacing(0.5),
    marginBottom: spacing(0.5),
    color: Colors.black,
  };
});

const InputDateContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "solid 1px",
    color: Colors.black,
    paddingBottom: spacing(0.5),
    marginBottom: spacing(1),
  };
});

//---Opções de Usuários---//
const CardNavigation = styled(Paper)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    backgroundColor: colors.secondary.main,
    display: "flex",
    flexDirection: "column",
    borderRadius: spacing(0.625),
    marginTop: spacing(0),
    width: "100%",
  };
});

const ButtonNavigation = styled(Button)(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: Colors.white0,
    borderBottom: "solid 5px",
    borderRadius: 0,
    width: "100%",
    display: "flex",
    paddingBlock: spacing(2.25),
    paddingInline: spacing(2.5),
    fontFamily: Fonts.bold,
    fontSize: 12,
  };
});

const RightContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: spacing(0.5),
    background: Colors.white0,
    width: "100%",
    borderRadius: spacing(0.625),
  };
});

const LoadingContainer = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    margin: "auto",
  };
});

const CircleLoading = styled(CircularProgress)(() => {
  return {
    "&.MuiCircularProgress-indeterminate": {
      color: Colors.black,
    },
  };
});

const Styles = {
  Container,
  //---Estilos dos filtros---//
  HeaderContainer,
  HeaderContent,
  Content,
  Title,
  SubTitle,
  FiltersCard,
  IconGeralData,
  IconRegistry,
  InputDateContainer,
  CardContent,
  IconBlackList,
  //---Opções de Usuários---//
  CardNavigation,
  ButtonNavigation,
  RightContainer,
  LoadingContainer,
  CircleLoading,
};

export default Styles;
