import styled from "styled-components";
import { Colors } from "../../../config";
import FontStyles from "../../../components/styles/fontStyles";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    //marginTop: spacing(0.5),
    padding: spacing(1),
    paddingLeft: spacing(10),
    paddingRight: spacing(10),
    backgroundColor: Colors.black,
    zIndex: 1,
    height: "min-content",
  };
});

const Content = styled.div(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    zIndex: 2,
  };
});

const FooterText = styled.p(({ theme, $defaultFont }) => {
  return {
    ...FontStyles.bold18,
    fontSize: $defaultFont ? "18px" : "25px",

    fontWeight: $defaultFont ? 700 : null,
    color: "white",
    alignSelf: "center",
    margin: 0,
  };
});

const Styles = {
  Container,
  Content,
  FooterText,
};

export default Styles;
