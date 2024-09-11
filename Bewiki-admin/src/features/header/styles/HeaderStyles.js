import styled from "styled-components";
import { Colors, MediaQueries } from "../../../config";
import { Container as DefaultContainer, IconButton } from "@material-ui/core";

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    position: "relative",
    display: "flex",
    width: "100%",
    backgroundColor: Colors.white0,
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)",
    zIndex: 1,
    color: Colors.white0,
    borderBottom: "solid 2px",
    marginTop: spacing(0),
    padding: spacing(1.5),
  };
});

const Content = styled(DefaultContainer)(({ theme, $maxWidth }) => {
  const { breakpoints } = theme;
  return {
    maxWidth: breakpoints.values[$maxWidth],
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
    /*[MediaQueries.mdDown]: {
      padding: spacing(4, 1, 1, 3),
    },
    [MediaQueries.smDown]: {
      padding: spacing(4, 0, 1, 2),
    },*/
  };
});

const FirstContentGroup = styled.div((props) => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

const MenuButton = styled(IconButton)(({ theme, $defaultColor }) => {
  const { spacing } = theme;
  return {
    color: Colors.black,
    height: spacing(1.625),
    width: spacing(1.625),
    margin: spacing(1),
    marginRight: spacing(2),
    [MediaQueries.smUp]: {
      display: "none",
    },
  };
});

const Styles = {
  Container,
  Content,
  FirstContentGroup,
  MenuButton,
};

export default Styles;
