import React from "react";
import { Colors } from "../../config";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import styled from "styled-components";
import { FontStyles } from "..";
import { Search } from "@material-ui/icons";

type InputSearchProps = {
  onEnterKeyPress: any;
};

const StyledInputSearch = styled(TextField)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    backgroundColor: colors.background.default,
    "& .MuiInput-input": {
      color: colors.text.primary,
      ...FontStyles.regular16,

      "&::placeholder": {
        opacity: 0.3,
      },
    },
  };
});

const ContainerInputSearch = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    borderRadius: "10px",
    backgroundColor: colors.background.default,

    padding: spacing(1),
    width: "fit-content",
  };
});

function InputSearch({ onEnterKeyPress }: InputSearchProps) {
  const [dataValue, setDataValue] = React.useState<string>(" ");
  const searchInput = React.useRef<any>();

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnterKeyPress(e.target.value);
    }
  };

  const HandleClick = (e) => {
    e.preventDefault();
    onEnterKeyPress(dataValue);
  };

  return (
    <>
      <ContainerInputSearch>
        <StyledInputSearch
          name="TableFilter"
          ref={searchInput}
          fullWidth
          size="small"
          placeholder="Buscar..."
          onKeyPress={onKeyPress}
          onChange={(e) => setDataValue(e.target.value)}
          InputProps={{
            disableUnderline: true,
            underline: "none",
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" onClick={HandleClick}>
                  <Search htmlColor={Colors.darkGray} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </ContainerInputSearch>
    </>
  );
}

export default InputSearch;
