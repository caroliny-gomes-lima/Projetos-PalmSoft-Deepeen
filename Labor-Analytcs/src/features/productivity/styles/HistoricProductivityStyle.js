import styled from "styled-components";
import { MediaQueries } from "../../../config";

const Content = styled.div((props) => ({
  [MediaQueries.lgDown]: {
    overflow: "auto",
  },
}));

const GraphContainer = styled.div(({ theme }) => {
  return {
    height: "22rem",
    flexGrow: 1,
    [MediaQueries.lgDown]: {
      minWidth: 600,
    },
  };
});

const Styles = {
  Content,
  GraphContainer,
};

export default Styles;
