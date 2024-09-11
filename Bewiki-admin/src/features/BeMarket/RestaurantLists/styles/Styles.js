import styled from "styled-components";
import { Button, CircularProgress, Paper } from "@material-ui/core";
import FontStyles from "../../../../components/styles/fontsStyles";
import { ButtonContained, Text } from "../../../../components";
import { Colors, Fonts } from "../../../../config";

const Container = styled(Paper)(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    padding: spacing(2),
    background: Colors.white0,
    width: "100%",
    height: "95%",
    borderRadius: spacing(0.625),
  };
});

const ScrollContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    overflow: "auto",
    paddingRight: spacing(1),
    height: "67vh",
    width: "100%",
  };
});

const HeaderContainer = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "solid 2px",
    color: Colors.black,
  };
});

const HeaderContent = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    width: "250px",
  };
});

const Title = styled(Text)(() => {
  return {
    color: Colors.black,
    ...FontStyles.bold14,
  };
});

const FilterContainer = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "250px",
  };
});

const LoadingContainer = styled.div((props) => {
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
const FooterPagination = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    padding: spacing(1),
    justifyContent: "flex-end",
  };
});

//------Logo modal------------

const ImageContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    marginTop: spacing(5),
    marginBottom: spacing(5),
    borderRadius: spacing(0.625),
    backgroundColor: Colors.orange,
  };
});
const ImageContent = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: Colors.gray3,
  };
});
const HeaderImageContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: spacing(1),
    alignItems: "center",
  };
});
const FooterModal = styled.div(({ theme, $defaultPadding }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing(0),
  };
});

export const SubTitle = styled(Text)(
  ({ theme, $defaultFonts, $defaultMargin }) => {
    const { spacing } = theme;
    return {
      fontFamily: Fonts.semibold,
      fontSize: 12,
      color: Colors.white0,
      paddingInline: spacing(2),
    };
  }
);

const TextButton = styled(ButtonContained)(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: $defaultColor ? Colors.black : Colors.blue,
    backgroundColor: "white",
    width: "auto",
    borderRadius: 25,
    padding: spacing(0.8, 2),
  };
});

const ButtonTableModal = styled(Button)(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: Colors.orange,
    padding: spacing(0.6),
    paddingLeft: spacing(2),
    ...FontStyles.bold10,
    color: Colors.white0,
    width: "100%",
    height: "auto",
    borderRadius: 25,
    lineHeight: "normal",
    ".MuiButton-endIcon": {
      width: 30,
    },
    "&:hover": {
      background: Colors.orange,
      opacity: 0.5,
    },
  };
});

const Styles = {
  ScrollContainer,
  HeaderContainer,
  HeaderContent,
  Container,
  LoadingContainer,
  Title,
  FilterContainer,
  CircleLoading,
  FooterPagination,
  //------Logo modal-----
  ImageContainer,
  ImageContent,
  HeaderImageContent,
  ButtonTableModal,
  TextButton,
  FooterModal,
  SubTitle,
};

export default Styles;
