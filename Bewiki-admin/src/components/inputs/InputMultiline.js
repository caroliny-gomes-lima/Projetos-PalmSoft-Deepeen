//Organizar cores de acorodo com o theme
import React from "react";
import { FormControl, Input, FormHelperText } from "@material-ui/core";
import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { formConnector } from "../../FormConfig";
import Text from "../strings/Text";

import { FontStyles } from "..";

const Label = styled(Text)(({ theme, $withValue, $withError }) => {
  const { spacing, palette: colors } = theme;
  return {
    position: "absolute",
    top: $withValue ? 0 : spacing(4.5),
    left: $withValue ? 0 : spacing(1),
    color: $withValue
      ? $withError
        ? colors.error.main
        : "#000000"
      : "#000000",
    transition: ".2s",
    pointerEvents: "none",
  };
});

const StyledInput = styled(Input)(
  ({
    theme,
    error,
    disabled,
    $inputStyle,
    $error,
    countComponent,
    ...rest
  }) => {
    const { spacing, palette: colors } = theme;
    return {
      padding: spacing(2),

      alignItems: "flex-start",

      minHeight: spacing(18),
      maxHeight: spacing(18),
      multiline: true,
      width: "100%",
      textOverflow: "ellipsis",
      borderBottom: null,
      borderColor: $error ? colors.error.main : `#000000`,
      marginTop: spacing(0),
      opacity: disabled ? 0.3 : 1,
      overflow: "auto",
      "& .MuiInput-input": {
        color: "#red",

        "&::placeholder": {
          opacity: "0.5",
        },
        "&input:-internal-autofill-selected": {
          color: "red",
          background: "yellow",
        },
      },
      ...$inputStyle,
    };
  }
);
const Count = styled.p(({ theme, $withValue, errorComponent }) => {
  const { spacing, palette: colors } = theme;

  return {
    color: colors.background.defaultHover,
    opacity: 0.6,
    textAlign: "end",
    marginTop: spacing(0.5),
    padding: 0,

    marginRight: spacing(2),

    right: 0,
    ...FontStyles.italic14,
  };
});

function InputComponent(props) {
  const {
    value,
    error,
    handleKeyPress,
    handleKeyDown,
    onBlur,
    setConfigs,
    ref,
    formHandler,
    fileInputRef,
    usedProps,
  } = formConnector.useStringValue(props);

  const {
    inputLabel,
    theme,
    required,
    color,
    disableError,
    hideVisualError,
    inputStyle,
    type,
    readOnly,
    autoComplete = false,
    maxlenght,
    name,
    ...rest
  } = usedProps;

  return (
    <FormControl fullWidth error={hideVisualError ? null : Boolean(error)}>
      <div style={{ backgroundColor: "white", borderRadius: "18px" }}>
        <StyledInput
          {...rest}
          multiline
          autoComplete={autoComplete ? autoComplete : null}
          readOnly={readOnly}
          disabled={props.disabled || type === "file"}
          $error={hideVisualError ? null : Boolean(error)}
          onClick={type === "file" ? () => fileInputRef.current.click() : null}
          disableUnderline={true}
          inputProps={{
            maxLength: maxlenght,
          }}
          type={type === "file" ? null : type}
          value={type === "file" ? (value ? value.name : "") : value}
          required={Boolean(required)}
          label={value ? inputLabel : null}
          fullWidth
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          inputRef={ref}
          onChange={
            type !== "file" ? (event) => setConfigs(event.target.value) : null
          }
          onBlur={(event) => {
            setTimeout(() => {
              onBlur(event);
              formHandler.testInputError(props.name);
            }, 10);
          }}
        />
        {maxlenght ? (
          <Count id={`form_count_${props.name}`}>
            {value ? value?.length : "0"} / {maxlenght} caracteres
          </Count>
        ) : null}
      </div>

      {disableError ? null : (
        <FormHelperText error={Boolean(error)} id={`form_error_${props.name}`}>
          {Boolean(error) ? error : " "}
        </FormHelperText>
      )}
      <Label
        $withValue={Boolean(value) || value === 0}
        $withError={Boolean(error)}
      >
        {inputLabel}
      </Label>
    </FormControl>
  );
}

export default withTheme(InputComponent);
