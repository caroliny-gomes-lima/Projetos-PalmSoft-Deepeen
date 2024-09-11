import styled from "styled-components";

const GraphContainer = styled.div(({ theme, data, loading = false }) => {
  const { spacing } = theme;
  let a = !loading && data ? { minHeight: 312 } : null;
  return {
    padding: spacing(4, 4, 4, 4),
    flex: 1,
    ...a,
  };
});

const Styles = {
  GraphContainer,
};

export default Styles;
