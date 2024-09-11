import React from "react";
import { withTheme } from "@material-ui/styles";
import styled from "styled-components";

const Input = styled.input({
  position: "absolute",
  zIndex: -50,
  opacity: 0,
  height: 0,
});

function FileInvisibleInputComponent({ fileInputRef, accept, setConfigs }) {
  return (
    <Input
      ref={fileInputRef}
      type="file"
      accept={accept}
      onChange={(e) => {
        if (e.target.files[0]) {
          setConfigs(e.target.files[0]);
        }
      }}
    />
  );
}

export default withTheme(FileInvisibleInputComponent);
