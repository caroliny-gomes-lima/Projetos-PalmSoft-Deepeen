import styled from "styled-components";
import { MediaQueries } from "../../../config";

const ProcessItemContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "50%",
    padding: spacing(1),
    [MediaQueries.smDown]: {
      width: "100%",
    },
  };
});

const GraphContainer = styled.div(({ theme }) => {
  return {
    height: "17rem",
    paddingTop: 10,
  };
});

const Styles = {
  ProcessItemContainer,
  GraphContainer,
};
export default Styles;
