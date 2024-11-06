import React from "react";

import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
  Typography,
  TextField,
  Input,
} from "@material-ui/core";

import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { IconButton } from "@material-ui/core";
import { FieldProps, useFormFull } from "form-full";
import { Colors, Spacing } from "../../config";
import FontStyles from "../styles/fontStyles";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const Label = styled.p(({ theme, $withError, $color }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.bold14,
    //textTransform: "uppercase",
    padding: 0,
    margin: 0,
    color: $withError
      ? colors.error.main
      : $color === 2
        ? colors.text.primary
        : $color === 1
          ? colors.orange
          : Colors.darkBlue,
    transition: ".2s",
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
  };
});
const LabelView = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
  };
});

const StyledInput = styled(Input)(
  ({
    theme,
    error,
    disabled,
    $inputStyle,
    $error,
    $small,

    $minHeight,
    ...rest
  }) => {
    const { palette: colors } = theme;
    return {
      "&&.MuiInput-root": {
        ...FontStyles.medium12,
        padding: theme.spacing(1.962, 2.5),
        alignItems: $minHeight && "flex-start",
        paddingTop: $minHeight && Spacing(2.5),
        marginTop: Spacing(1.5),
        multiline: true,
        minHeight: $minHeight && Spacing(20),
        textOverflow: "ellipsis",
        color: error ? "red" : "colors.text.primary",
        backgroundColor: theme.palette.primary.contrastText,
        borderBottom: "0px",
        borderRadius: theme.spacing(0.6),
        "& .MuiInputBase-input": {
          padding: 0,
          backgroundColor: "transparent",
          boxShadow: "transparent 0px 0px !important",
        },
        ...$inputStyle,
      },
    };
  }
);
const Count = styled.p(({ theme, $withValue }) => {
  const { spacing, palette: colors } = theme;

  return {
    width: "100%",
    color: colors.text.primary,
    opacity: 0.6,
    textAlign: "end",
    marginTop: spacing(0.5),
    padding: 0,
    margin: 0,
    ...FontStyles.medium12,
  };
});

const ErrorMessage = styled(FormHelperText)(({ theme }) => {
  return {
    color: "red",
    minHeight: Spacing(2.5),
  };
});

function getErrorClassname(base, error, valid) {
  const className = base;
  if (error) return `${className} invalid`;
  if (valid) return `${className} valid`;
  return className;
}

function getHint(error) {
  if (error) return error;

  return null;
}
export interface Props extends FieldProps<any> {
  id?: string;
  label?: string;
  disableError?: boolean;
  hideVisualError?: boolean;
  type?: string;
  withHide?: () => void;
  placeholder?: string;
  state?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  endButton?: (onChange: (event: any, value: any) => void, value: any) => void;

  multiline?: boolean;
  name: string;
  endAdornment?: any;
}

function InputComponent(props: Props) {
  const { value, error, onBlur, ref, valid, onChange, ffHandler } =
    useFormFull.field(props);

  const {
    id,
    label,
    required,
    disableError,
    hideVisualError,
    type,
    withHide,
    placeholder,
    state,
    readOnly,
    maxLength,
    endButton,

    multiline,
    name,
    endAdornment
  } = props;

  React.useEffect(() => {
    if (label) {
      const test = document.querySelector(
        ".form-input-" + label?.replace(/\s/g, "")
      )?.children;
      if (test) {
        const a = Array.from(test as HTMLCollectionOf<HTMLElement>).find(
          (element: any) => {
            if (element?.localName === "fieldset") {
              return element;
            } else {
              return null;
            }
          }
        );

        if (a) {
          a.style.paddingLeft = Spacing(3) + "px";
        }
      }
    }
  }, [label]);
  return (
    <FormControl
      className={getErrorClassname("form-control", error, valid)}
      fullWidth
      error={hideVisualError ? undefined : Boolean(error)}
    >
      {label && (
        <LabelView>
          <Label
            className={"form-input-label-" + label?.replace(/\s/g, "")}
            $withValue={Boolean(value) || value === 0 || Boolean(placeholder)}
            $withError={Boolean(error)}
          >
            {label}
            {required && "*"}
          </Label>
        </LabelView>
      )}
      <StyledInput
        multiline={multiline}
        $minHeight={multiline}
        labelWidth={() => {
          if (label) {
            let width = document.querySelector(
              ".form-input-label-" + label.replace(/\s/g, "")
            ) as HTMLElement;
            return width?.offsetWidth;
          } else {
            return 0;
          }
        }}
        inputProps={{
          maxLength: maxLength,
          style: {
            WebkitBoxShadow: "0 0 0 1000px white inset",
            alignItems: "flex-start",
          },
        }}
        error={error}
        id={id}
        type={type ? type : null}
        disableUnderline={true}
        name={name}
        value={value}
        ref={ref}
        required={!!required}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event, event.target.value);
        }}
        onBlur={() => {
          ffHandler?.testFieldError(name, false);
        }}
        readOnly={readOnly}
        className={"form-input-" + label?.replace(/\s/g, "")}
        endAdornment={
          withHide ? (
            <InputAdornment position="end">
              <IconButton
                size="small"
                aria-label="toggle password visibility"
                onClick={withHide}
                edge="end"
              >
                {state ? <VisibilityOffIcon style={{ fill: "#7A12F5" }} /> : <VisibilityIcon style={{ fill: "#7A12F5" }} />}
              </IconButton>
            </InputAdornment>
          ) : endButton ? (
            endButton(onChange, value)
          ) : endAdornment ? (
            endAdornment
          ) : null
        }

      />

      {maxLength ? (
        <Count>
          {value ? value?.length : "0"} / {maxLength} caracteres
        </Count>
      ) : null}
      {disableError ? null : (
        <ErrorMessage error={Boolean(error)}>{getHint(error)}</ErrorMessage>
      )}
    </FormControl>
  );
}

export default withTheme(InputComponent);
