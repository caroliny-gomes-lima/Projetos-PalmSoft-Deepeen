import styled from "styled-components";
import { FontStyles } from "../../../components";
import { Colors, fonts } from "../../../config";
import { FormHelperText, IconButton } from "@material-ui/core";

const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: theme.spacing(2),
    borderRadius: "23.004px",
    width: "100%",
    marginBottom: theme.spacing(10),
    background: Colors.gray + 70,
    boxShadow:
      "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
  };
});

const BlogContainer = styled.div(({ theme, $DefaultPaddingBottom}) => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    paddingBottom: $DefaultPaddingBottom ? theme.spacing(2) : null,
    borderRadius: "23.004px",
    width: "100%",
    marginBottom: theme.spacing(3),
    background: Colors.gray + 70,
    boxShadow:
      "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
  };
});

const Label = styled.p(({ theme, $error }) => {
  const { palette: colors } = theme;
  return {
    fontFamily: fonts.medium,
    fontSize: "20px",
    textTransform: "capitalize",
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
    color: $error,
    transition: ".2s",
    pointerEvents: "none",
  };
});

const HeaderTable = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "5px",
    gap: 10,
  };
});

const AreaButtonsTable = styled.div(() => {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: 8,
  };
});

const LoadingContainer = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: theme.spacing(2),
    width: "100%",
    height: "100%",
  };
});

const TextContainer = styled.div(() => {
  return {
    borderRadius: "12px",
    width: "100%",
    height: "fit-content",
    backgroundColor: "rgba(27, 30, 34, 0.30)",
  };
});

const contentModalInfo = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(2),
  };
});

const ImageIcon = styled.img(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "75.93px",
    height: "68.323px",
    flexShrink: 0,
    marginTop: spacing(0),
  };
});

const TextsModal = styled.p(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.regular18,
    fontSize: "20px",
    fontWeight: 400,
    marginTop: spacing(2),
  };
});

const paddingModal = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingInline: spacing(3.5),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginTop: spacing(2),
  };
});

const NoDataContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const NoDataText = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    color: Colors.black,
    ...FontStyles.regular18,

    margin: 0,
  };
});

const ErrorMessage = styled(FormHelperText)(({ theme }) => {
  const { spacing } = theme;
  return {
    "&&.MuiFormHelperText-root": {
    color: Colors.red,
    minHeight: spacing(2.5),
  }
}
});

const StyledIconButton = styled(IconButton)(({ theme }) => {
  const { spacing } = theme;
  return {
    "&&.MuiIconButton-root": {
      width: "5px",
      height: "5px",
      alignSelf: "center",
      backgroundColor: Colors.darkGray,
      color: Colors.white,
      marginBottom: spacing(1),
    },
  };
});

const Styles = {
  Container,
  Label,
  BlogContainer,
  AreaButtonsTable,
  LoadingContainer,
  TextContainer,
  contentModalInfo,
  ImageIcon,
  TextsModal,
  paddingModal,
  NoDataContainer,
  NoDataText,
  HeaderTable,
  ErrorMessage,
  StyledIconButton
};

export default Styles;
