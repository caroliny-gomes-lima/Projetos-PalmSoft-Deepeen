import React from "react";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import { Spacing } from "../../config";
import dateFns from "@date-io/date-fns";
import brLocate from "date-fns/locale/pt-BR";
import { formConnector } from "../../FormConfig";
import styled from "styled-components";

const InputDate = styled(DatePicker)(({ theme, $alternativeColors, error }) => {
  const { palette: colors } = theme;
  return {
    ".MuiInputBase-root": {
      margin: 0,
      border: 0,
      borderRadius: 5,
      color: $alternativeColors
        ? colors.text.primary
        : colors.background.default,
      backgroundColor: $alternativeColors
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
});

function InputDateMMyyyyComponent(props) {
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
        disableFuture
        openTo="month"
        views={["year", "month"]}
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

export default InputDateMMyyyyComponent;
