import styled from "styled-components";
import {
  ButtonContained as DefaultButtonContained,
  ButtonOutlined as DefaultButtonOutlined,
  ButtonIcon,
} from "../../../components";
import { MediaQueries } from "../../../config";

const Container = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    flex: 1,
  };
});

const NavigationContainer = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    [MediaQueries.xlDown]: {},
  };
});

const ButtonContainer = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(0, 0.5),
  };
});

const ButtonContained = styled(DefaultButtonContained)({
  textTransform: "none",
});

const ButtonOutlined = styled(DefaultButtonOutlined)(({ disabled }) => ({
  textTransform: "none",
  opacity: disabled ? 0.5 : 1,
}));

const IconButton = styled(ButtonIcon)(({ disabled }) => ({
  textTransform: "none",
  opacity: disabled ? 0.5 : 1,
}));

const Style = {
  Container,
  NavigationContainer,
  ButtonContainer,
  ButtonContained,
  ButtonOutlined,
  IconButton,
};

export default Style;
