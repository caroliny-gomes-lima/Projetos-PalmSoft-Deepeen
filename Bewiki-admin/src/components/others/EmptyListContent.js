import styled from "styled-components";
import Text from "../strings/Text";

const StyledContainer = styled.div(({ theme }) => {
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

function EmptyContent({ message }) {
  return (
    <StyledContainer>
      <Title>{message}</Title>
    </StyledContainer>
  );
}

export default EmptyContent;
