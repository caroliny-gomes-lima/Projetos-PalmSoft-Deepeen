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
import { Colors, Spacing, fonts } from "../../config";
import FontStyles from "../styles/fontStyles";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const Label = styled.p(({ theme, $withError, $color, $customLabel, $BlogQuillTitleLabel }) => {
  const { palette: colors } = theme;
  return {
    fontFamily: $customLabel ? fonts.bold : fonts.medium,
    fontStyle: $BlogQuillTitleLabel ? FontStyles.regular18 : null,
    fontSize: $customLabel ? "17.111px" : $BlogQuillTitleLabel ? "20px" :"14.007px",
    fontWeight: $customLabel ? "800" : null,
    padding: 0,
    margin: 0,
    color: $withError
      ? Colors.red
      : $color === 2
      ? colors.text.secondary
      : $color === 1
      ? colors.orange
      : colors.text.primary,
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
    justifyContent: "space-between",
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
    $customColor,
    $minHeight,
    $darkColor,
    ...rest
  }) => {
    return {
      "&&.MuiInput-root": {
        ...FontStyles.medium14,
        padding: theme.spacing(1.962, 2.5),
        alignItems: $minHeight && "flex-start",
        paddingTop: $minHeight && Spacing(2.5),
        marginTop: Spacing(1),
        multiline: true,
        minHeight: $minHeight && Spacing(10),
        textOverflow: "ellipsis",
        color: error ? Colors.red : Colors.black,
        background: $customColor ? $customColor : "rgba(27, 30, 34, 0.30)",
        borderBottom: "0px",
        borderRadius: 12,
        "& .MuiInputBase-input": {
          padding: 0,
          "&::placeholder": {
            opacity: $darkColor ? 1 : 0.5,
          },
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
    "&&.MuiFormHelperText-root": {
      color: Colors.red,
    },
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
  infoLabel?: string;
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
  customColor?: string;
  customLabel?: boolean;
  BlogQuillTitleLabel?: boolean;
  multiline?: boolean;
  name: string;
  startAdornment?: any;
  autoComplete?: string;
  darkColor?: boolean;
  InputTargetValue?: any;
}

function InputComponent(props: Props) {
  const { value, error, onBlur, ref, valid, onChange, ffHandler } =
    useFormFull.field(props);

  const {
    id,
    infoLabel,
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
    customColor,
    customLabel,
    BlogQuillTitleLabel,
    multiline,
    name,
    startAdornment,
    autoComplete,
    darkColor
  } = props;

  React.useEffect(() => {
    if (label) {
     
      const test = document.querySelector(
        ".form-input-" + name?.replace(/\s/g, "")
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
            $customLabel={customLabel}
            $BlogQuillTitleLabel={BlogQuillTitleLabel}
          >
            {label}
            {required && "*"}
          </Label>
          <div style={{fontSize: "0.7rem", marginBottom: 0}}>{infoLabel ? infoLabel : null}</div>
        </LabelView>
      )}
      <StyledInput
        autoComplete={autoComplete ? autoComplete : "off"}
        startAdornment={startAdornment}
        multiline={multiline}
        onFocus={() => (false)}
        $minHeight={multiline}
        $customColor={customColor}
        $darkColor={darkColor}
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
            // WebkitBoxShadow: "0 0 0 1000px white inset",
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
          ffHandler?.testFieldError(name, true);
        }}
        readOnly={readOnly}
        className={"form-input-" + label?.replace(/\s/g, "")}
        endAdornment={
          withHide ? (
            <InputAdornment position="end">
              <IconButton
                color="secondary"
                size="small"
                aria-label="toggle password visibility"
                onClick={withHide}
                edge="end"
              >
                {state ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ) : endButton ? (
            endButton(onChange, value)
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
