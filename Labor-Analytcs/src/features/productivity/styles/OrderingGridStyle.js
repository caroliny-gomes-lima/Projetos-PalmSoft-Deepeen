import styled from "styled-components";
import { ButtonContained } from "../../../components";
import { ChartsColors } from "../../../config";
import {
  ArrowUpThick,
  ArrowDownThick,
  BlankCircle,
} from "../../../config/icons";

const colors = ChartsColors.orderingProductivity;

const GraphContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: 200,
    padding: spacing(0, 1, 0, 0),
  };
});

const ArrowUp = styled(ArrowUpThick)(({ theme }) => ({
  fill: colors.positive,
  width: 16,
  height: 16,
}));
const ArrowDown = styled(ArrowDownThick)(({ theme }) => ({
  fill: colors.negative,
  width: 16,
  height: 16,
}));
const Circle = styled(BlankCircle)(({ theme }) => ({
  fill: colors.neutral,
  width: 16,
  height: 16,
}));

const RowTitle = styled.div(({ theme, $onlyTitle }) => {
  return {
    display: "flex",
    position: "relative",
    whiteSpace: "nowrap",
    width: 200,
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

const OrderingButton = styled(ButtonContained)(({ theme }) => {
  const { spacing } = theme;
  return {
    textTransform: "none",
    backgroundColor: colors.backgroundColor1,
    padding: spacing(0, 2),
    minHeight: spacing(5),
    minWidth: spacing(25),
  };
});

const ExportButton = styled(ButtonContained)(({ theme }) => {
  const { spacing } = theme;
  return {
    textTransform: "none",
    padding: spacing(0, 1),
    minHeight: spacing(5),
  };
});

const Styles = {
  ArrowUp,
  ArrowDown,
  Circle,
  GraphContainer,
  RowTitle,
  TitleContainer,
  ButtonsContainer,
  OrderingButtonContainer,
  ExportButtonContainer,
  ExportButton,
  OrderingButton,
};

export default Styles;
