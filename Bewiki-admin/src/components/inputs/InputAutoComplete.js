import React from "react";
import { FormControl, TextField } from "@material-ui/core";
import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { formConnector } from "../../FormConfig";
import { Autocomplete } from "@material-ui/lab";
import { Fonts } from "../../config";

const StyledInput = styled(TextField)(
  ({
    theme,
    error,
    disabled,
    $inputStyle,
    $error,
    $small,
    $alternativeColors,
  }) => {
    const { spacing, palette: colors } = theme;
    return {
      padding: $small ? spacing(0.7, 1) : spacing(1),
      multiline: false,
      textOverflow: "ellipsis",
      marginTop: spacing(0),
      boxShadow: $error
        ? `inset 0 0 0 2px ${colors.error.main}`
        : `inset 0 0 0 ${colors.error.main}`,
      opacity: disabled ? 0.3 : 1,
      "& .MuiInput-input": {
        color: colors.black,
        // marginBottom: "-7px",
        fontFamily: Fonts.semibold,
        fontSize: 14,
        "&::placeholder": {
          opacity: 0.8,
        },
      },
      "& .MuiInput-underline:before": {
        borderBottom: "none",
      },

      "& .MuiInput-underline:after": {
        borderBottom: "none",
      },
      '& .MuiInput-underline:hover:before': {
        border: 'none !important'
      },
      ...$inputStyle,
    };
  }
);

function InputComponent(props) {
  const { value, error, onBlur, setConfigs, formHandler, usedProps, ref } =
    formConnector.useStringValue(props);

  const { inputLabel, hideVisualError, small, alternativeColors, options } =
    usedProps;

  React.useEffect(() => {
    if (ref && value === "") {
      const ele = ref.current.getElementsByClassName(
        "MuiAutocomplete-clearIndicator"
      )[0];
      if (ele) {
        ele.click();
      }
    }
  }, [value, ref]);

  return (
    <FormControl fullWidth error={hideVisualError ? null : Boolean(error)}>
      <Autocomplete
        ref={ref}
        options={options}
        getOptionLabel={(options) => options.label}
        defaultValue={value}
        onChange={(event, value) => {
          if (value === null) {
            setConfigs(-1, event);
          } else {
            setConfigs(value.value, event);
          }
          setTimeout(() => {
            onBlur();
            formHandler.testInputError(props.name);
          }, 10);
        }}
        renderInput={(params) => (
          <StyledInput
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
            $alternativeColors={alternativeColors}
            $small={small}
            label={value ? inputLabel : null}
            {...params}
          />
        )}
      />
    </FormControl>
  );
}

export default withTheme(InputComponent);
