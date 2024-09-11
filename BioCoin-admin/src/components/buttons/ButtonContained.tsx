import { CircularProgress, Button } from "@material-ui/core";
import styled from "styled-components";
import { Colors, Spacing } from "../../config";
import FontStyles from "../styles/fontStyles";
import { useFormFull } from "form-full";

const StyledButton = styled(Button)(({ theme, fullWidth, $customColor, $upper }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiButton-root": {
      width: fullWidth ? "100%" : "fit-content",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: Spacing(1, 2),
      flexShrink: 0,
      overflow: "hidden",
      textTransform: "capitalize",
      marginTop: Spacing(0.75),
      ...FontStyles.regular14,
      fontSize: $customColor ? "17.111px" : null,
      fontWeight: "800",
      color: colors.text.secondary,
      boxShadow: "none",
      backgroundColor: $customColor ? $customColor : colors.secondary.contrastText,
      borderRadius: 7,
      "&:hover": {
        backgroundColor: $customColor ? $customColor + 60 : Colors.lightBlue + 60,
      },
    },

    "&&.MuiButton-startIcon": {
      fill: colors.primary.main,
      width: 17,
    },

    "&&.Mui-disabled": {
      backgroundColor: colors.action.disabled,
      opacity: 0.6,
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
  customColor?: string;
}

function ButtonContainedComponent({
  fullWidth = true,
  label,
  children,
  customColor,
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
      variant="contained"
      loading={loading || formLoading}
      disabled={disabled || formDisabled}
      fullWidth={fullWidth}
      $customColor={customColor}
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

export default ButtonContainedComponent;
