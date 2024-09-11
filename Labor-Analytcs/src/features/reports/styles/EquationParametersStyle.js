import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { ButtonContained, FontStyles } from "../../../components";
import { MediaQueries } from "../../../config";

const InputContainer = styled.div(({ theme, fullWidth }) => {
  const { spacing } = theme;
  return {
    padding: spacing(2),
    paddingBottom: spacing(2),
    background: "#2C3E50",
    marginTop: spacing(2),
    marginLeft: spacing(1),
    marginRight: spacing(1),
    marginBottom: spacing(0),
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    width: fullWidth ? "100%" : "70%",
    flex: 1,
    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});
const Content = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});

const InputGrid = styled(Grid)(({ theme }) => {
  const { spacing } = theme;
  return { padding: spacing(1) };
});

const Label = styled.p(() => ({
  margin: 0,
  display: "flex",
  flexDirection: "row",
  ...FontStyles.roman14,
}));
const LabelBold = styled.p(() => ({
  margin: 0,
  ...FontStyles.bold14,
}));
const LabelExLight = styled.p(() => ({
  margin: 0,
  ...FontStyles.light14,
}));

const RowTitle = styled.div(({ theme, $onlyTitle }) => {
  return {
    display: "flex",
    position: "relative",
    justifyContent: "flex-end",
    whiteSpace: "nowrap",
    minHeight: $onlyTitle ? theme.spacing(7) : null,
    [theme.MediaQueries.mdDown]: {
      minHeight: $onlyTitle ? theme.spacing(6) : null,
    },
  };
});

const TitleContainer = styled.div(() => ({
  position: "absolute",
  left: 0,
}));

const ButtonsContainer = styled.div(({ theme }) => {
  return {
    display: "flex",
    [theme.MediaQueries.mdDown]: {
      flexDirection: "column-reverse",
      alignItems: "flex-end",
    },
  };
});

const OrderingButtonContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: spacing(0, 1, 2, 0),
    [theme.MediaQueries.mdDown]: {
      margin: spacing(0, 0, 1, 0),
    },
  };
});

const ExportButtonContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    margin: spacing(0, 1, 2, 0),
    [theme.MediaQueries.mdDown]: {
      margin: spacing(0, 0, 1, 0),
    },
  };
});

const ExportButton = styled(ButtonContained)(({ theme }) => {
  const { spacing } = theme;
  return {
    textTransform: "none",
    padding: spacing(0, 2),
    minHeight: spacing(5),
  };
});

const Styles = {
  InputContainer,
  Content,
  InputGrid,
  Label,
  LabelBold,
  LabelExLight,
  RowTitle,
  TitleContainer,
  ButtonsContainer,
  OrderingButtonContainer,
  ExportButtonContainer,
  ExportButton,
};

export default Styles;
