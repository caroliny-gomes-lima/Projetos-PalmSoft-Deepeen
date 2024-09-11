import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Fonts, Spacing } from "../../config";
import { formConnector } from "../../FormConfig";

const StyledButton = styled(Button)(({ theme, fullWidth }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: fullWidth ? "100%" : 'fit-content',
    margin: spacing(0),
    padding: spacing(1.1, 1),
    fontFamily: Fonts.semibold,
    fontSize: 14,
    backgroundColor: colors.action.backgroundHover,
    color: "white",
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: "20px",
    ".MuiButton-startIcon": {
      fill: "colors.primary.contrastText",
      width: 17,
    },
    "&:hover": {
      backgroundColor: colors.action.disabledBackground,
      color: colors.action.active,
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
  defaultColor,
  variant,
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
      variant={variant}
      $defaultColor={defaultColor}
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
