import React from "react";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { Spacing } from "../../config";
import dateFns from "@date-io/date-fns";
import { formConnector } from "../../FormConfig";
import styled from "styled-components";
import { Fonts } from "../../config";

const InputDate = styled(KeyboardDatePicker)(
  ({ theme, $alternativeColors, error, $gray }) => {
    const { spacing } = theme;
    return {
      ".MuiInputBase-root": {
        margin: spacing(0),
        marginTop: $gray ? 0 : spacing(1),
        padding: $gray ? spacing(0.75) : spacing(0),
        //border: 0,
        borderRadius: $gray ? 6 : 0,
        color: "black", //deixar cor como tema depois
        /*backgroundColor: $alternativeColors
          ? colors.text.secondary
          : colors.text.primary,*/
        backgroundColor: $gray ? "#F0F0F0" : "transparent",

        "& input": {
          padding: spacing(0.5),
          fontFamily: Fonts.semibold,
          fontSize: 14,

          "&::placeholder": {
            opacity: 0.8,
          },
        },
        "& fieldset": {
          border: error ? null : 0,
        },
        ".MuiIconButton-root": {
          color: "black",
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
    gray,
    autoComplete,
    ...restProps
  } = usedProps;

  return (
    <MuiPickersUtilsProvider utils={dateFns}>
      <InputDate
        {...restProps}
        $alternativeColors={alternativeColors}
        $gray={gray}
        {...(readOnly ? { open: !readOnly } : {})}
        autoComplete={autoComplete === false ? "new-password" : null}
        inputVariant="outlined"
        format={format ? format : "dd/MM/yyyy"}
        minDate={minDate}
        maxDate={maxDate}
        inputProps={{
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
        color="black"
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
