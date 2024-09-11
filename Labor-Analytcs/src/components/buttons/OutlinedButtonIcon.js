import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Spacing, MediaQueries } from "../../config";
import { formConnector } from "../../FormConfig";
//aqui        //aqui
const StyledButton = styled(Button)(({ theme, $buttonColor, $iconColor }) => {
  const { palette: colors, spacing } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing(1, 0, 0, 0),
    minWidth: "45px",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
    color: $iconColor === 2 ? colors.text.primary : colors.text.secondary, //aqui
    borderColor: colors.text.secondary,
    backgroundColor:
      $buttonColor === 2 ? colors.text.secondary : colors.text.primary, //aqui
    [MediaQueries.xsDown]: {
      borderColor: "none",
      minWidth: "30px",
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
    opacity: $show ? 15 : 10,
  };
});

function IconButtonComponent({
  fullWidth = true,
  loading,
  children,
  type,
  disabled,
  name,
  buttonColor, //aqui
  IconColor,
  colorVariant,
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
      variant="outlined"
      $buttonColor={buttonColor}
      $iconColor={IconColor}
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

export default IconButtonComponent;
