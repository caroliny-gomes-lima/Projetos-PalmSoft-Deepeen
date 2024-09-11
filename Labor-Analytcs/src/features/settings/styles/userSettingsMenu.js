import styled from "styled-components";
import { FontStyles } from "../../../components";

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
}));

const MenuItem = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1, 0, 1, 0),
    cursor: "pointer",
  };
});

const MenuText = styled.p((props) => ({
  ...FontStyles.medium14,
  textTransform: "capitalize",
  margin: 0,
}));

const Styles = {
  Container,
  MenuItem,
  MenuText,
};

export default Styles;
