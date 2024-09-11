import styled from "styled-components";
import { MediaQueries } from "../../../config";

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  flex: 1,
  overflow: "auto",
}));

const Content = styled.div((props) => ({
  [MediaQueries.lgDown]: {
    overflow: "auto",
  },
}));

const GraphContainer = styled.div(({ theme }) => {
  return {
    flexGrow: 1,
    [MediaQueries.lgDown]: {
      minWidth: 600,
    },
  };
});

const DescriptionGroup = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  [MediaQueries.lgDown]: {
    minWidth: 600,
  },
}));

const Styles = {
  Container,
  Content,
  GraphContainer,
  DescriptionGroup,
};

export default Styles;
