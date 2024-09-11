import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Spacing } from "../../config";

import { useFormFull } from "form-full";
import FontStyles from "../styles/fontStyles";
const StyledButton = styled(Button)(({ theme, $upper }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiButton-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: Spacing(1, 2),
      marginTop: Spacing(0.75),
      flexShrink: 0,
      overflow: "hidden",
      color: colors.text.primary,
      border: "solid 0.815px",
      borderColor: colors.text.primary,
      //borderWidth: Spacing(0.2),
      borderRadius: "4.537px",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: colors.text.primary + 20,
      },
      ...FontStyles.regular18,
      fontSize: "1rem",
    },

    ".MuiButton-startIcon": {
      //fill: "blue",
      //width: 17,
    },
  };
});
const StyledCircularProgress = styled(CircularProgress)(({ theme, $show }) => {
  const { palette: colors } = theme;
  return {
    position: "absolute",
    color: colors.text.secondary,
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
      variant="outlined"
      loading={loading || formLoading}
      disabled={disabled || formDisabled}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      <StyledCircularProgress size={Spacing(3)} $show={loading} />
      <ChildrenContainer $show={!loading}>
        {label ? label : children}
      </ChildrenContainer>
    </StyledButton>
  );
}

export default ButtonTextComponent;
