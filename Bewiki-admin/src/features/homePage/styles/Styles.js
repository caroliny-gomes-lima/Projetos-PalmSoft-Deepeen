import styled from "styled-components";

const Container = styled.div((props) => ({
  display: "flex",
  overflow: "hidden",
  height: "100vh",
  width: "100%",
}));

const Background = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: "white",
    borderRadius: spacing(0.625),
    width: "100%",
    margin: spacing(2),
    padding: spacing(2),
  };
});

const Styles = {
  Container,

  Background,
};

export default Styles;
