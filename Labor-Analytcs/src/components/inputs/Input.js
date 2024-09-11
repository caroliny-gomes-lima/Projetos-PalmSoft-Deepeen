import React from "react";

import { FormControl, Input, FormHelperText } from "@material-ui/core";
import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { formConnector } from "../../FormConfig";
import Text from "../strings/Text";
import { FileEndAdornment, IconEndAdornment } from "./inputsComponents";
import { InputAdornment } from "@material-ui/core";

const Label = styled(Text)(({ theme, $withValue, $withError }) => {
  const { spacing, palette: colors, typography } = theme;

  return {
    position: "absolute",
    top: $withValue ? 0 : spacing(4.5),
    left: $withValue ? 0 : spacing(1),
    color: $withValue
      ? $withError
        ? colors.error.main
        : colors.text.primary
      : typography.body2.color,
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
    $small,
    $paddingLength,
    $alternativeColors,
    $marginTopInput,
    $widthIput,
    ...rest
  }) => {
    const { spacing, palette: colors } = theme;
    return {
      margin: 0,
      border: 0,
      padding: $small ? spacing(0, 1) : spacing(1),
      paddingLeft: $paddingLength === 2 ? spacing(16) : spacing(1),
      textOverflow: "ellipsis",
      width: $widthIput === 2 ? " 80%" : $widthIput === 3 ? "135px" : null,
      backgroundColor:
        $alternativeColors === 2
          ? colors.lightBlueInput
          : $alternativeColors === 3
          ? colors.darkerBlue
          : colors.text.primary,
      borderRadius: 5,
      marginTop:
        $marginTopInput === 2
          ? spacing(4.5)
          : $marginTopInput === 3
          ? spacing(0)
          : spacing(3.2),
      boxShadow: $error
        ? `inset 0 0 0 2px ${colors.error.main}`
        : `inset 0 0 0 ${colors.error.main}`,
      opacity: disabled ? 0.3 : 1,
      "& .MuiInput-input": {
        color: $alternativeColors
          ? colors.text.primary
          : colors.background.default,

        "&::placeholder": {
          opacity: 0.8,
        },
      },
      ...$inputStyle,
    };
  }
);

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
    icon,
    theme,
    required,
    color,
    disableError,
    hideVisualError,
    margin = "none",
    variant = "outlined",
    inputStyle,
    type,
    downloadButtonLabel,
    uploadButtonLabel,
    withDownload,
    hideButtonLabel,
    readOnly,
    downloadHref,
    openOnNewTab,
    autoComplete = false,
    accept,
    small,
    paddingLength,
    alternativeColors,
    marginTopInput,
    widthIput,
    iconEnd,
    ...rest
  } = usedProps;

  return (
    <FormControl fullWidth error={hideVisualError ? null : Boolean(error)}>
      <StyledInput
        {...rest}
        $alternativeColors={alternativeColors}
        $marginTopInput={marginTopInput}
        $widthIput={widthIput}
        $small={small}
        $paddingLength={paddingLength}
        autoComplete={autoComplete ? autoComplete : null}
        readOnly={readOnly}
        disabled={props.disabled || type === "file"}
        $error={hideVisualError ? null : Boolean(error)}
        onClick={type === "file" ? () => fileInputRef.current.click() : null}
        disableUnderline
        endAdornment={
          (type === "file" ? (
            <FileEndAdornment
              fileInputRef={fileInputRef}
              downloadButtonLabel={downloadButtonLabel}
              uploadButtonLabel={uploadButtonLabel}
              downloadHref={downloadHref}
              openOnNewTab={openOnNewTab}
              hideButtonLabel={hideButtonLabel}
            />
          ) : icon && icon.Component ? (
            <IconEndAdornment formHandler={formHandler} icon={icon} />
          ) : null,
          (<InputAdornment position="end">{iconEnd}</InputAdornment>))
        }
        type={type === "file" ? null : type}
        value={type === "file" ? (value ? value.name : "") : value}
        required={Boolean(required)}
        variant={variant}
        color={color}
        label={value ? inputLabel : null}
        fullWidth
        margin={margin}
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
      {disableError ? null : (
        <FormHelperText error={Boolean(error)}>
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
