import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Spacing } from "../../config";
import { formConnector } from "../../FormConfig";

const StyledButton = styled(Button)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing(1.1, 2),
    flexShrink: 0,
    overflow: "hidden",
    color: colors.text.secondary,
    borderColor: colors.text.secondary,
    ".MuiButton-startIcon": {
      fill: colors.text.secondary,
      width: 17,
    },
  };
});

const StyledCircularProgress = styled(CircularProgress)(({ theme, $show }) => {
  const { palette: colors } = theme;
  return {
    position: "absolute",
    color: colors.primary.main,
    transition: ".5s",
    opacity: $show ? 1 : 0,
  };
});

const ChildrenContainer = styled.div(({ $show }) => {
  return {
    transition: ".5s",
    opacity: $show ? 1 : 0.5,
  };
});

function ButtonTextComponent({
  fullWidth = true,
  loading,
  children,
  type,
  disabled,
  name,
  ...props
}) {
  const { disabled: stateDisabled, onClick, ref } = formConnector.useFormButton(
    {
      type,
      disabled,
      name,
    }
  );
  return (
    <StyledButton
      variant="outlined"
      ref={ref}
      type={null}
      fullWidth={fullWidth}
      disabled={stateDisabled}
      onClick={onClick}
      {...props}
    >
      <StyledCircularProgress size={Spacing(3)} $show={loading} />
      <ChildrenContainer $show={!loading}>{children}</ChildrenContainer>
    </StyledButton>
  );
}

export default ButtonTextComponent;
