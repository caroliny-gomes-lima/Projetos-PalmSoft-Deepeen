import React, { useContext } from "react";
import { Colors, Texts } from "../../../config";
import { StorageContext } from "../../../contexts/StorageContext";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
import styled from "styled-components";
import { FontStyles } from "../../../components";
import { Search } from "@material-ui/icons";

const StyledInputFilter = styled(TextField)(({ theme }) => {
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

const ContainerInputFilter = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    borderRadius: "5.742px",
    backgroundColor: colors.background.default,
    padding: spacing(1),
    width: "fit-content",
  };
});

function InputFilter() {
  const { addData } = useContext<any>(StorageContext);
  const texts = Texts["pt-BR"].Main.Users;
  return (
    <>
      <ContainerInputFilter>
        <StyledInputFilter
          name="TableFilter"
          fullWidth
          size="small"
          placeholder="Buscar..."
          InputProps={{
            disableUnderline: true,
            underline: "none",
            endAdornment: (
              <InputAdornment position="end">
                <Search htmlColor={Colors.darkGray} />
              </InputAdornment>
            ),
          }}
        />
      </ContainerInputFilter>
    </>
  );
}

export default InputFilter;
