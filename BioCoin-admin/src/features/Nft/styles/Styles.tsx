import styled from "styled-components";
import { Colors, fonts } from "../../../config";
import { ButtonContained, FontStyles } from "../../../components";
import { IconButton, TextField } from "@material-ui/core";

const Container = styled.div(() => {
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "23.004px",

    width: "100%",
    height: "auto",

    background: Colors.gray + 70,
    boxShadow:
      "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
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

const ButtonTable = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "fit-content",
    padding: spacing(0),
    display: "flex",
    flexDirection: "row",
    gap: 8,
  };
});

const IconBox = styled.div(({ $customColor, theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    padding: spacing(1.5),
    display: "flex",
    backgroundColor: $customColor,
    color: Colors.white,
    borderRadius: 5,
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

const contentModalDelete = styled.div(({ theme }) => {
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
  const { spacing } = theme;
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

const NoDataContainer = styled.div(() => {
  return {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const NoDataText = styled.p(() => {
  return {
    color: Colors.black,
    ...FontStyles.regular18,
    margin: 0,
  };
});

const MediaContent = styled.div(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "flex-start",
    gap: 5,
  };
});
const NFTImage = styled.div(({ theme }) => {
  const { breakpoints } = theme;
  return {
    display: "flex",

    flexDirection: "column",
    alignContent: "flex-start",
    gap: 5,
    width: "fit-content",
    height: "auto",
    [breakpoints.down("lg")]: {
      width: "100%",
    },
  };
});
const NFTImageContainer = styled.div(({ theme, imageSrc }) => {
  const { breakpoints } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(data:image/png/jpeg;base64,${imageSrc})`,
    backgroundColor: "gray",
    minWidth: "296px",
    maxWidth: "296px",
    height: "clamp(300px, 100%, 400px)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "14px",
    minHeight: "300px",
    [breakpoints.down("lg")]: {
      minWidth: "100%",
      minHeight: "300px",

      maxWidth: "100%",
    },
  };
});

const Label = styled.p(({ theme, $defaultMargin }) => {
  const { spacing } = theme;
  return {
    color: Colors.black,
    ...FontStyles.regular18,
    fontSize: "20px",
    fontWeight: 400,
    marginTop: $defaultMargin ? spacing(1) : 0,
    marginBottom: 0,
  };
});

const TitleTable = styled.p(({ theme, $defaultMargin }) => {
  const { spacing } = theme;
  return {
    color: Colors.black,
    ...FontStyles.bold18,
    fontSize: "25px",
    fontWeight: 800,
    marginTop: $defaultMargin ? spacing(5) : 0,
    marginBottom: spacing(0),
  };
});

const StatusContainer = styled.div(({ theme, $disabled }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.regular12,
    fontSize: "8.135px",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    backgroundColor: $disabled ? Colors.gray : Colors.green,
    padding: spacing(1),
    borderRadius: "5px",
    width: "100%",
  };
});

const ButtonFilter = styled(ButtonContained)(({ theme, $focus }) => {
  const { spacing } = theme;
  return {
    "&&.MuiButton-root": {
      ...FontStyles.regular14,
      fontSize: "15px",
      width: "100%",
      padding: spacing(0),
      marginBottom: "20px",
      backgroundColor: $focus ? Colors.darkGray : Colors.gray,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: Colors.darkGray,
      },
    },
  };
});

const ImageBox = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: spacing(0),
    backgroundColor: Colors.darkGray,
    alignItems: "center",
    border: "solid 1.212px",
    borderColor: Colors.white,
    borderRadius: "14.903px",
  };
});

const PaddingModal = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    paddingInline: spacing(3.5),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  };
});

const LabelTextBox = styled.p(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    fontFamily: fonts.medium,
    fontSize: "14.007px",
    marginTop: 0,
    marginBottom: spacing(1),
    color: colors.text.primary,
    transition: ".2s",
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
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
const ErrorMessage = styled.a(({ theme }) => {
  const { spacing } = theme;
  return {
    color: Colors.red,
    minHeight: spacing(2.5),
  };
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
      marginTop: spacing(0.5),
    },
  };
});

const Styles = {
  Container,
  AreaButtonsTable,
  LoadingContainer,
  TextsModal,
  paddingModal,
  contentModalDelete,
  ImageIcon,
  NoDataContainer,
  NoDataText,
  MediaContent,
  Label,
  StatusContainer,
  ButtonFilter,
  TitleTable,
  ButtonTable,
  IconBox,
  ImageBox,
  PaddingModal,
  LabelTextBox,
  contentModalInfo,
  HeaderTable,
  ErrorMessage,
  StyledIconButton,
  NFTImage,
  NFTImageContainer,
};

export default Styles;
