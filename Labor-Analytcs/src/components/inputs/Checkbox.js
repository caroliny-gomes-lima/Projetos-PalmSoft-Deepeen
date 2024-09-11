import React from "react";
import {
  FormControlLabel,
  FormControl,
  FormHelperText,
  Checkbox,
  withTheme,
} from "@material-ui/core";
import { formConnector } from "../../FormConfig";

function CheckboxComponent(props) {
  const { label, required, disableError } = props;

  const { value, error, setConfigs, ref } = formConnector.useBooleanValue(
    props
  );

  return (
    <FormControl required={required} error={error}>
      <FormControlLabel
        control={<Checkbox checked={value} inputRef={ref} />}
        onChange={() => setConfigs(!value)}
        label={label}
        labelPlacement="end"
      />
      {disableError ? null : (
        <FormHelperText>{error ? error : " "}</FormHelperText>
      )}
    </FormControl>
  );
}

export default withTheme(CheckboxComponent);
