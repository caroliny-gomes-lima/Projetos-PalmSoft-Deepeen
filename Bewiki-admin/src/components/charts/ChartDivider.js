import { Divider } from "@material-ui/core";
import styled from "styled-components";

const ChartDividerComponent = styled(Divider)(({ theme }) => {
  const { spacing, palette: colors } = theme;

  return {
    backgroundColor: colors.white,
    opacity: 0.2,
    margin: spacing(2, 0),
  };
});

export default ChartDividerComponent;
