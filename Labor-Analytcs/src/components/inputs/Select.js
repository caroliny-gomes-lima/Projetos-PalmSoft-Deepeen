import React from "react";
import {
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { formConnector } from "../../FormConfig";
import styled from "styled-components";

const StyledInput = styled(Input)(
  ({
    theme,
    error,
    disabled,
    $inputStyle,
    $error,
    $small,
    $alternativeColors,
    ...rest
  }) => {
    const { spacing, palette: colors } = theme;
    return {
      padding: $small ? spacing(0, 1) : spacing(1),
      multiline: true,
      textOverflow: "ellipsis",
      backgroundColor:
        $alternativeColors === 2
          ? colors.lightBlueInput
          : $alternativeColors
          ? colors.text.secondary
          : colors.text.primary,
      borderRadius: 5,
      marginTop: spacing(3.2),
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
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: 0,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    backgroundColor: colors.background.paper,
    "&.MuiListItem-button:hover": {
      backgroundColor: colors.text.secondary + 20,
    },
    "&.Mui-selected": {
      backgroundColor: colors.text.secondary + 50,
    },

    "& .MuiPaper-root": {
      backgroundColor: "red",
    },
  };
});

function SelectComponent(props) {
  const { value, error, setConfigs, onBlur, ref, formHandler, usedProps } =
    formConnector.useStringValue(props);
  const { onChange, name, small, alternativeColors } = props;
  const onSelectValue = React.useCallback(
    (event) => {
      setConfigs(event.target.value, event);
      try {
        onChange(event.target.value);
      } catch (err) {}
      setTimeout(() => {
        onBlur();
        formHandler.testInputError(name);
      }, 10);
    },
    [setConfigs, onBlur, formHandler, name, onChange]
  );

  const {
    containerStyles,
    required,
    inputLabel,
    options,
    disableError,
    customInput,
    readOnly,
    autoComplete = false,
  } = usedProps;

  return (
    <StyledFormControl
      style={containerStyles}
      fullWidth
      error={Boolean(error)}
      required={Boolean(required)}
      onMouseUp={(event) => event.stopPropagation()}
    >
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        disableUnderline
        ref={ref}
        value={value}
        onChange={onSelectValue}
        onMouseUp={(event) => event.stopPropagation()}
        input={
          customInput ? (
            <StyledInput
              $small={small}
              $alternativeColors={alternativeColors}
            />
          ) : null
        }
        readOnly={readOnly}
        autoComplete={autoComplete ? autoComplete : null}
        style={{
          borderRadius: "4px",
          marginTop: "1px",
        }}
      >
        {options.map((option) => (
          <StyledMenuItem value={option.value}>{option.label}</StyledMenuItem>
        ))}
      </Select>
      {disableError ? null : (
        <FormHelperText>{error ? error : " "}</FormHelperText>
      )}
    </StyledFormControl>
  );
}

export default SelectComponent;
