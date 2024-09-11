//Organizar cores de acorodo com o theme
import React from "react";
import { FormControl, Input, FormHelperText } from "@material-ui/core";
import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { formConnector } from "../../FormConfig";
import Text from "../strings/Text";
import { FileEndAdornment, IconEndAdornment } from "./inputsComponents";

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
    $small,
    $alternativeColors,
    $marginDefault,
    $defaultBorder,
    ...rest
  }) => {
    const { spacing, palette: colors } = theme;
    return {
      padding: $small ? spacing(0.5) : spacing(1),
      multiline: true,
      width: "100%",
      textOverflow: "ellipsis",
      borderBottom: $defaultBorder ? "solid 1px" : "solid 3px",
      borderColor: $error ? colors.error.main : `#000000`,
      marginTop: $marginDefault ? spacing(0) : spacing(3.2),
      opacity: disabled ? 0.3 : 1,
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
    marginDefault,
    defaultBorder,
    alternativeColors,
    endButton,
    startButton,
    textStartIcon,
    textIcon,
    ...rest
  } = usedProps;

  return (
    <FormControl fullWidth error={hideVisualError ? null : Boolean(error)}>
      <StyledInput
        {...rest}
        $alternativeColors={alternativeColors}
        $small={small}
        $defaultBorder={defaultBorder}
        $marginDefault={marginDefault}
        autoComplete={autoComplete ? autoComplete : null}
        readOnly={readOnly}
        disabled={props.disabled || type === "file"}
        $error={hideVisualError ? null : Boolean(error)}
        onClick={type === "file" ? () => fileInputRef.current.click() : null}
        disableUnderline
        startAdornment={
          icon && icon.Component ? (
            <IconEndAdornment formHandler={formHandler} icon={icon} />
          ) : startButton ? (
            <>{startButton}</>
          ) : textStartIcon ? (
            <>{textStartIcon} </>
          ) : null
        }
        endAdornment={
          type === "file" ? (
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
          ) : endButton ? (
            <>{endButton}</>
          ) : textIcon ? (
            <>{textIcon}</>
          ) : null
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
