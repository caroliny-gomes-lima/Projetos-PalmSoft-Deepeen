import styled from "styled-components";
import { Fonts, Colors } from "../../../../config";
import { Text } from "../../../../components";
import { IconButton, CircularProgress } from "@material-ui/core";
import { ButtonOutlined } from "../../../../components";
import { Delete } from "@material-ui/icons";

const HeaderContant = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    color: Colors.black,
    marginTop: spacing(1),
    marginBottom: spacing(1),
  };
});

const Box = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1),
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: spacing(0),
    marginTop: spacing(0),
  };
});

export const Title = styled(Text)(() => {
  return {
    fontWeight: "bold",
    color: Colors.green,
  };
});

const BoxContent = styled.div(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
  };
});

const SwitchBox = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: Colors.white2,
    padding: spacing(1),
    width: "100%",
    height: "auto",
    borderRadius: 5,
  };
});

export const SwitchLabel = styled(Text)(() => {
  return {
    fontFamily: Fonts.bold,
    display: "flex",
    flexWrap: "wrap",
    fontWeight: "bold",
    color: Colors.black,
    alignSelf: "center",
    fontSize: 13,
  };
});

const ImageIcon = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    marginRight: spacing(4),
    width: "1%",
    height: "1%",
  };
});

const ButtonIcon = styled(IconButton)(({ theme }) => {
  const { spacing } = theme;
  return {
    background: Colors.white2,
    marginLeft: spacing(1),
    padding: spacing(3),

    width: "15%",
    height: "70%",

    borderRadius: 5,
  };
});

const DeleteIcon = styled(Delete)(() => {
  return {
    fontSize: 25,
    color: Colors.red,
  };
});

const ButtonAddItem = styled(ButtonOutlined)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.bold,
    fontSize: 14,
    marginTop: spacing(1),
    marginBottom: spacing(0),
    color: Colors.black,
    width: "90%",
    lineHeight: "normal",
    height: "auto",
    border: "none",
    ".MuiButton-endIcon": {
      width: 17,
    },
  };
});

const Line = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    marginTop: spacing(3),
    width: "100%",
    height: spacing(0.2),
    backgroundColor: Colors.white2,
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

const Style = {
  HeaderContant,
  Title,
  SwitchLabel,
  SwitchBox,
  ButtonIcon,
  ButtonAddItem,
  DeleteIcon,
  Line,
  Box,
  BoxContent,
  ImageIcon,
  LoadingContainer,
  CircleLoading,
};

export default Style;
