import React from "react";
import {
  FormControlLabel,
  FormControl,
  FormHelperText,
  withTheme,
  Switch,
} from "@material-ui/core";
import { formConnector } from "../../FormConfig";

function SwitchComponent(props) {
  const { required, disableError } = props;

  const { value, error, setConfigs, ref } =
    formConnector.useBooleanValue(props);

  return (
    <FormControl required={required} error={error}>
      <FormControlLabel
        control={<Switch checked={value} color="primary" inputRef={ref} />}
        onChange={() => setConfigs(!value)}
      />
      {disableError ? null : (
        <FormHelperText>{error ? error : " "}</FormHelperText>
      )}
    </FormControl>
  );
}

export default withTheme(SwitchComponent);
