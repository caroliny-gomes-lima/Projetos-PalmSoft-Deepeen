import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Spacing } from "../../config";
import { formConnector } from "../../FormConfig";

const StyledButton = styled(Button)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing(1.1, 2),
    //height: "20px",
    flexShrink: 0,
    overflow: "hidden",
    ".MuiButton-startIcon": {
      fill: colors.primary.contrastText,
      width: 17,
    },
  };
});

const StyledCircularProgress = styled(CircularProgress)(({ theme, $show }) => {
  const { palette: colors } = theme;
  return {
    position: "absolute",
    color: colors.secondary.main,
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

function ButtonContainedComponent({
  fullWidth = true,
  loading,
  children,
  type,
  disabled,
  name,
  ...props
}) {
  const {
    disabled: stateDisabled,
    onClick,
    ref,
  } = formConnector.useFormButton({
    type,
    disabled,
    name,
  });

  return (
    <StyledButton
      variant="contained"
      color="primary"
      type={null}
      ref={ref}
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

export default ButtonContainedComponent;
