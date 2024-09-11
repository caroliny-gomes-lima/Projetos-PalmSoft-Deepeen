import styled from "styled-components";
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

const Styles = {
  ArrowUp,
  ArrowDown,
  Circle,
  GraphContainer,
};

export default Styles;
