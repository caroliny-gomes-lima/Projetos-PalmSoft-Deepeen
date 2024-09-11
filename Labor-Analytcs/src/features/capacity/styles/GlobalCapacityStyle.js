import styled from "styled-components";

const GraphContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(3, 0, 3, 0),
    flex: 1,
  };
});

const Styles = {
  GraphContainer,
};

export default Styles;
