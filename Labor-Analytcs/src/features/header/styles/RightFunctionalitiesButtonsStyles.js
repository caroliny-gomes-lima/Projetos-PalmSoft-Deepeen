import styled from "styled-components";
import { ButtonContained as DefaultButtonContained } from "../../../components";
import { MediaQueries } from "../../../config";

const IconButtonsContainer = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  [MediaQueries.mdUp]: {
    display: "none",
  },
}));

const IconExitButtonsContainer = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  [MediaQueries.mdUp]: {
    display: "none",
  },
  [MediaQueries.smDown]: { //acrescentei aqui
    display: "none",
  },
}));

const ButtonsContainer = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  [MediaQueries.mdDown]: {
    display: "none",
  },
}));

const ButtonContained = styled(DefaultButtonContained)(({ theme }) => {
  const { spacing } = theme;
  return {
    marginLeft: spacing(2),
  };
});

const ButtonContainedExit = styled(DefaultButtonContained)(({ theme }) => {
  const { spacing } = theme;
  return {
    marginLeft: spacing(2),
  };
});

const Styles = {
  ButtonsContainer,
  IconButtonsContainer,
  ButtonContained,
  ButtonContainedExit,
  IconExitButtonsContainer,
};

export default Styles;
