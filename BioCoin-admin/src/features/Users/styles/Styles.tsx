import styled from "styled-components";
import { Colors } from "../../../config";
import { FontStyles } from "../../../components";

const Container = styled.div(({ theme, $changeBackground }) => {
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "23.004px",

    width: "100%",
    height: "auto",

    background: $changeBackground  ? "unset" : Colors.gray + 70,
    boxShadow: $changeBackground ? "unset" :
      "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
  };
});

const HeaderTable = styled.div(() => {
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

const ImageIcon = styled.img(({ theme, $HoverColor, $Hover }) => {
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

const Styles = {
  Container,
  AreaButtonsTable,
  HeaderTable,
  LoadingContainer,
  TextsModal,
  paddingModal,
  contentModalDelete,
  ImageIcon,
  NoDataContainer,
  NoDataText
};

export default Styles;
