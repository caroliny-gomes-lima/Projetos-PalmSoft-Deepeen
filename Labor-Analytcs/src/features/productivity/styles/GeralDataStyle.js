import styled from "styled-components";
import FontStyle from "../../../components/styles/fontsStyles";
import { Colors } from "../../../config";

const Container = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    minWidth: 300,
    maxWidth: 400,
    // height: "100%",
  };
});

const DataContainer = styled.div(({ theme, font }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    padding: spacing(2, 2, 2, 2),
    backgroundColor: Colors.lightBlueInput,
    borderRadius: 5,
    width: "100%",
    ...FontStyle.medium36,
    fontSize: font === 2 ? 22 : 36,
    // height: "100%",
  };
});

const Styles = {
  Container,
  DataContainer,
};

export default Styles;
