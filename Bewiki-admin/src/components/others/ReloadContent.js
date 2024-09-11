import { ButtonBase } from "@material-ui/core";
import styled from "styled-components";
import Text from "../strings/Text";

const StyledButtonBase = styled(ButtonBase)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    flexDirection: "column",
    padding: spacing(2),
    borderRadius: 4,
    backgroundColor: colors.darkOpacity,
  };
});

const Title = styled(Text)({
  textAlign: "center",
});

const TextContainer = styled.div({
  display: "flex",
  justifyContent: "center",
});

const Icon = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    color: colors.lightBlue,
  };
});

const RefreshText = styled(Text)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    color: colors.lightBlue,
    marginRight: spacing(0.5),
    textDecoration: "underline",
  };
});

function ReloadContent({ message, reloadCallback, buttonLabel }) {
  return (
    <StyledButtonBase onClick={reloadCallback}>
      <Title>{message}</Title>
      <TextContainer>
        <Icon />
        <RefreshText>{buttonLabel}</RefreshText>
      </TextContainer>
    </StyledButtonBase>
  );
}

export default ReloadContent;
