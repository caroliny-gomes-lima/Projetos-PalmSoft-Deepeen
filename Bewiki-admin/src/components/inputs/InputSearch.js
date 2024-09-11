import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  //createStyles,
  //makeStyles,
} from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import styled from "styled-components";
import FontStyle from "../styles/fontsStyles";
import { formConnector } from "../../FormConfig";

/*const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: 0,
      padding: 0,
      width: "90%",
    },
  });
});*/

const StyledInput = styled(TextField)(({ theme, $flow }) => {
  //const { spacing } = theme;
  return {
    padding: 6,
    backgroundColor: "#ECECEC",
    width: "100%",
    borderRadius: $flow ? 5 : 30,
    "& .MuiInput-input": {
      color: "#000000",
      "&::placeholder": {
        opacity: 0.8,
        ...FontStyle.medium14,
        color: "#717175",
      },
    },
  };
});

function InputSearch(props) {
  const {
    value,
    error,
    handleKeyPress,
    handleKeyDown,
    onBlur,
    setConfigs,
    ref,
    formHandler,
    //fileInputRef,
    usedProps,
  } = formConnector.useStringValue(props);

  const { defaultValue, placeholder, flow, onChange, hideVisualError } =
    usedProps;

  //const { search } = useStyles();

  const [clearIcon, setClearIcon] = useState(false);

  /*const handleChange = (event) => {
    setClearIcon(event === "" ? false : true);
  };*/

  return (
    <FormControl fullWidth error={hideVisualError ? null : Boolean(error)}>
      <StyledInput
        size="small"
        ref={ref}
        onChange={
          onChange ? onChange : (event) => setConfigs(event?.target?.value)
        }
        variant="standard"
        $flow={flow}
        defaultValue={defaultValue}
        value={value ? value : null}
        placeholder={placeholder}
        onBlur={(event) => {
          setTimeout(() => {
            onBlur(event);
            formHandler.testInputError(props.name);
          }, 10);
        }}
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Search
                style={{ color: "#717175", width: 20, marginLeft: "10px" }}
              />
            </InputAdornment>
          ),
          endAdornment: !flow ? (
            <InputAdornment
              position="end"
              style={{
                display: clearIcon,
                color: "#717175",
                width: 20,
                marginRight: "20px",
              }}
            >
              <Clear />
            </InputAdornment>
          ) : null,
        }}
      />
    </FormControl>
  );
}
export default InputSearch;
