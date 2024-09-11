import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Fonts, Spacing } from "../../config";

const StyledButton = styled(Button)(
  ({ theme, fullWidth, fontSize, isForTable, backgroundColor }) => {
    const { spacing, palette: colors } = theme;
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: fullWidth ? "100%" : "fit-content",
      margin: spacing(0),
      padding: isForTable ? spacing(0.4, 1) : spacing(1.1, 1),
      fontFamily: Fonts.semibold,
      fontSize: fontSize || 14,
      backgroundColor: backgroundColor
        ? backgroundColor
        : colors.action.backgroundHover,
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
  }
);

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

function ButtonContainedWithoutFormComponent({
  fullWidth = true,
  loading,
  children,
  type,
  disabled,
  defaultColor,
  variant,
  name,
  onClick,
  endIcon,
  height,
  isForTable,
  fontSize,
  backgroundColor,
  ...props
}) {
  return (
    <StyledButton
      variant={variant}
      $defaultColor={defaultColor}
      color="primary"
      type={null}
      fullWidth={fullWidth}
      onClick={onClick}
      endIcon={endIcon}
      isForTable={isForTable}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      {...props}
    >
      <StyledCircularProgress size={Spacing(3)} $show={loading} />
      <ChildrenContainer $show={!loading}>{children}</ChildrenContainer>
    </StyledButton>
  );
}

export default ButtonContainedWithoutFormComponent;
