import React from "react";

import { InputAdornment, IconButton } from "@material-ui/core";

function IconEndAdornmentComponent({ formHandler, icon }) {
  return (
    <InputAdornment position="end">
      <IconButton
        {...(icon.buttonProps ? icon.buttonProps : {})}
        onClick={icon.submit ? formHandler?.submit : icon.buttonProps.onClick}
      >
        <icon.Component />
      </IconButton>
    </InputAdornment>
  );
}

export default React.memo(IconEndAdornmentComponent);
