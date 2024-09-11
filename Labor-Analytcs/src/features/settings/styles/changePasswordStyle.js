import styled from "styled-components";

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
}));

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(2),
  };
});

const Styles = {
  Container,
  Content,
};

export default Styles;
