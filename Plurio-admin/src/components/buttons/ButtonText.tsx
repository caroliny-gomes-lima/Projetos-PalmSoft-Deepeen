import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Spacing } from "../../config";

import FontStyles from "../styles/fontStyles";

import { useFormFull } from "form-full";
const StyledButton = styled(Button)(
  ({ theme, $defaultColor, fullWidth, disabled }) => {
    return {
      "&&.MuiButton-root": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: fullWidth ? Spacing(1.1, 2) : Spacing(1.1, 0.5),
        marginTop: Spacing(0.75),
        width: fullWidth ? "100%" : "fit-content",
        overflow: "hidden",
        ...FontStyles.medium16,
        textTransform: "unset",
        color: "black",
        opacity: disabled && 0.6,
      },
    };
  }
);
const StyledCircularProgress = styled(CircularProgress)(({ theme, $show }) => {
  const { palette: colors } = theme;
  return {
    position: "absolute",
    color: colors.text.primary,
    transition: ".5s",
    opacity: $show ? 1 : 0,
  };
});

const ChildrenContainer = styled.div(({ $show }) => {
  return {
    transition: ".5s",
    opacity: $show ? 1 : 0.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});
interface Props {
  fullWidth?: boolean;
  label?: string;
  children?: React.ReactNode;

  disabled?: boolean;
  loading?: boolean;
  name?: string;
  feedback?: boolean;
  action?: "submit" | "clear" | "clearDefault";

  onClick?: (event: any) => void;

  [key: string]: any;
}
function ButtonTextComponent({
  fullWidth = true,
  label,
  children,

  disabled,
  loading,
  name,
  feedback,
  action,

  onClick: onClickProps,
  ...props
}: Props): JSX.Element {
  const { onClick, formLoading, formDisabled } = useFormFull.button({
    feedback,
    action,
    onClick: onClickProps,
  });

  return (
    <StyledButton
      variant="text"
      loading={loading || formLoading}
      disabled={disabled || formDisabled}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      <StyledCircularProgress size={Spacing(3)} $show={loading} />

      <ChildrenContainer $show={!loading}>{children}</ChildrenContainer>
    </StyledButton>
  );
}

export default ButtonTextComponent;
