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
import { Fonts } from "../../config";

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
      background: "none",
      borderRadius: 5,
      marginTop: spacing(3.2),
      boxShadow: $error
        ? `inset 0 0 0 2px ${colors.error.main}`
        : `inset 0 0 0 ${colors.error.main}`,
      opacity: disabled ? 0.3 : 1,
      "& .MuiInput-input": {
        color: colors.black,
        fontFamily: Fonts.semibold,
        marginBottom: "-7px",
        fontSize: 14,
        "&::placeholder": {
          opacity: 0.8,
        },
      },
      ...$inputStyle,
    };
  }
);
const StyledFormControl = styled(FormControl)(
  ({ theme, $defaultMarginTop }) => ({
    "label + .MuiInput-formControl": {
      marginTop: $defaultMarginTop ? 0 : 8,
    },
  })
);

const StyledMenuItem = styled(MenuItem)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    backgroundColor: colors.background.paper,
    "&.MuiListItem-button:hover": {
      backgroundColor: colors.action.selected + 50,
      color: "white",
    },
    "&.Mui-selected": {
      backgroundColor: colors.action.selected + 100,
    },

    "& .MuiPaper-root": {
      backgroundColor: "red",
    },
  };
});

function SelectComponent(props) {
  const { value, error, setConfigs, onBlur, ref, formHandler, usedProps } =
    formConnector.useStringValue(props);
  const { onChange, name, small } = props;
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
    readOnly,
    disableBorder,
    defaultMarginTop,
  } = usedProps;

  return (
    <StyledFormControl
      $defaultMarginTop={defaultMarginTop}
      style={containerStyles}
      fullWidth
      error={Boolean(error)}
      required={Boolean(required)}
      onMouseUp={(event) => event.stopPropagation()}
    >
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        disableUnderline={disableBorder}
        readOnly={readOnly}
        ref={ref}
        value={value}
        onChange={onSelectValue}
        onMouseUp={(event) => event.stopPropagation()}
        input={<StyledInput $small={small} />}
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
