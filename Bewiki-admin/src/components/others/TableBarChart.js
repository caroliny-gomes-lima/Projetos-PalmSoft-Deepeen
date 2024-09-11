import React from "react";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
});

const GraphContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    padding: spacing(0, 1, 0, 0),
  };
});

function TableBarChartComponent({ children, label }) {
  return (
    <Container>
      <GraphContainer>{children}</GraphContainer>
      {label}
    </Container>
  );
}
export default React.memo(TableBarChartComponent);
