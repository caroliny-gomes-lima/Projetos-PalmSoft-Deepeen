import React from "react";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { Spacing } from "../../config";
import dateFns from "@date-io/date-fns";
import { formConnector } from "../../FormConfig";
import styled from "styled-components";

const InputDate = styled(KeyboardDatePicker)(
  ({ theme, $alternativeColors, error }) => {
    const { spacing, palette: colors } = theme;
    return {
      ".MuiInputBase-root": {
        padding: spacing(0.8, 1),
        borderRadius: 5,
        color: $alternativeColors
          ? colors.text.primary
          : colors.background.default,
        backgroundColor:
          $alternativeColors === 2
            ? colors.lightBlueInput
            : $alternativeColors
            ? colors.text.secondary
            : colors.text.primary,
        "& input": {
          padding: "6px 8px 7px 8px",
          "&::placeholder": {
            opacity: 0.8,
          },
        },
        "& fieldset": {
          border: error ? null : 0,
        },
      },
    };
  }
);

function InputDateComponent(props) {
  const {
    value,
    error,
    handleKeyPress,
    handleKeyDown,
    onBlur,
    setConfigs,
    ref,
    formHandler,
    usedProps,
  } = formConnector.useStringValue(props);

  const {
    inputLabel,
    icon,
    theme,
    required,
    color,
    disableError,
    borderRadius,
    variant = "outlined",
    inputStyle,
    views = ["year", "month", "date"],
    autoOk = true,
    format,
    readOnly,
    minDate,
    maxDate,
    alternativeColors,
    autoComplete,
    ...restProps
  } = usedProps;

  return (
    <MuiPickersUtilsProvider utils={dateFns}>
      <InputDate
        {...restProps}
        $alternativeColors={alternativeColors}
        {...(readOnly ? { open: !readOnly } : {})}
        autoComplete={autoComplete === false ? "new-password" : null}
        inputVariant="outlined"
        format={format ? format : "dd/MM/yyyy"}
        minDate={minDate}
        maxDate={maxDate}
        InputProps={{
          disableUnderline: true,
        }}
        inputProps={{
          disableUnderline: true,
          readOnly,

          style: {
            padding:
              variant === "outlined" && color === "secondary"
                ? Spacing(1)
                : null,
          },
        }}
        value={value ? value : null}
        required={Boolean(required)}
        variant={variant}
        color={color}
        label={inputLabel}
        fullWidth
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
        views={views}
        inputRef={ref}
        autoOk={autoOk}
        onChange={(date) => setConfigs(date)}
        onBlur={(event) => {
          setTimeout(() => {
            onBlur(event);
            formHandler.testInputError(props.name);
          }, 10);
        }}
        error={Boolean(error)}
        helperText={disableError ? null : error ? error : " "}
      />
    </MuiPickersUtilsProvider>
  );
}

export default InputDateComponent;
