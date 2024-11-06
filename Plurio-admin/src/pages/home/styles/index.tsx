import styled from "styled-components";

const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    padding: "12px",
    borderRadius: "5px",
    flex: 1,
    width: "100%",
    marginBottom: theme.spacing(1.5),
  };
});

const Styles = {
  Container,
};

export default Styles;
