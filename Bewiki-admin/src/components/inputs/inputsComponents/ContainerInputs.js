import styled from "styled-components";
import { Fonts } from "../../../config";
import { Text } from "../../../components/";

export const InputContainer = styled.div(
  ({ theme, $setBorder, $setMaginBottom, $setMarginRight }) => {
    const { spacing } = theme;
    return {
      marginTop: spacing(0),
      $setMarginRight: $setMarginRight ? spacing(1) : null,
      marginBottom: $setMaginBottom ? spacing(1) : null,
      width: "100%",
      height: "auto",
      borderBottom: $setBorder ? "solid 1px" : null,
    };
  }
);

export const HeaderContainer = styled.div(({ theme, $setMaginBottom }) => {
  const { spacing } = theme;
  return {
    color: "black",
    marginBottom: $setMaginBottom ? spacing(-1) : "-12px",
    padding: spacing(1, 0),
  };
});

export const InputTitle = styled(Text)(({ theme, $setMaginBottom }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.semibold,
    fontWeight: "bold",
    color: "#333438",
    fontSize: 12,
    marginBottom: $setMaginBottom ? spacing(1) : null,
  };
});

const StyledHelper = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontFamily: Fonts.semibold,
    fontSize: 10,
    color: "#333438",
    opacity: 0.8,
    marginTop: spacing(1),
  };
});

function ContainerInputs({
  inputLabel,
  children,
  setBorder,
  setMaginBottom,
  setMarginRight,
  textHelper,
}) {
  return (
    <>
      <InputContainer
        $setBorder={setBorder}
        $setMaginBottom={setMaginBottom}
        $setMarginRight={setMarginRight}
      >
        <HeaderContainer>
          <InputTitle>{inputLabel}</InputTitle>
        </HeaderContainer>
        {children}
      </InputContainer>
      <StyledHelper>{textHelper}</StyledHelper>
    </>
  );
}

export default ContainerInputs;
