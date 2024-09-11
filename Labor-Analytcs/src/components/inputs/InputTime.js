import React from "react";

import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";

import { Spacing } from "../../config";
import dateFns from "@date-io/date-fns";
import brLocate from "date-fns/locale/pt-BR";
import { formConnector } from "../../FormConfig";
import styled from "styled-components";

const InputDate = styled(TimePicker)(({ theme, $alternativeColors, error }) => {
  const { palette: colors, spacing } = theme;
  return {
    ".MuiInputBase-root": {
      margin: 0,
      border: 0,
      borderRadius: 5,
      marginTop: $alternativeColors === 2 ? spacing(2) : null,
      color: $alternativeColors
        ? colors.text.primary
        : colors.background.default,
      backgroundColor: $alternativeColors
        ? $alternativeColors === 2
          ? colors.lightBlueInput
          : colors.text.secondary
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
});

function InputTimeComponent(props) {
  const {
    value,
    error,
    handleKeyPress,
    handleKeyDown,
    setConfigs,
    ref,
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
    <MuiPickersUtilsProvider locale={brLocate} utils={dateFns}>
      <InputDate
        {...restProps}
        $alternativeColors={alternativeColors}
        {...(readOnly ? { open: !readOnly } : {})}
        inputVariant="outlined"
        ampm={false}
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
        views={["hours", "minutes"]}
        placeholder={"hh:mm"}
        format="HH:mm"
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
        inputRef={ref}
        autoOk={autoOk}
        onChange={(date) => {
          setConfigs(date);
        }}
        error={Boolean(error)}
        helperText={disableError ? null : error ? error : " "}
      />
    </MuiPickersUtilsProvider>
  );
}

export default InputTimeComponent;
