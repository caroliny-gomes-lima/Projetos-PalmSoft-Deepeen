import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormHelperText
} from "@material-ui/core";
import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { FieldProps, useFormFull } from "form-full";
import FontStyles from "../styles/fontStyles";
import SquareRadio from "../others/SquareRadio";
import { Colors, fonts, Spacing } from "../../config";
import CustomText from "../others/CustomText";


const Label = styled.p(({ theme, $withError, white }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.semibold14,
    textTransform: "uppercase",
    padding: 0,
    margin: 0,
    color: "black",
    transition: ".2s",
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden"
  };
});

const ErrorMessage = styled(FormHelperText)(({ theme }) => {
  return {
    color: "red",
    minHeight: theme.spacing(2.5)
  };
});

export interface Props extends FieldProps<any> {
  id?: string;
  label?: string;
  disableError?: boolean;
  name: string;
  required?: string;
  options: { value: string; label: string }[];
  white?: boolean;
}

function InputRadios(props: Props) {
  const { value, error, onBlur, ref, valid, onChange, ffHandler } =
    useFormFull.field(props);

  const { id, label, required, disableError, name, options, white } = props;

  return (
    <FormControl
      style={{ marginTop: "10px" }}
      component="fieldset"
      className={error ? "invalid" : valid ? "valid" : ""}
      fullWidth
      error={Boolean(error)}
    >
      {label && (
        <FormLabel component="legend">
          <Label
            white={white}
            className={"form-input-label-" + label.replace(/\s/g, "")}
            $withError={Boolean(error)}
          >
            {label}
            {required && "*"}
          </Label>
        </FormLabel>
      )}
      <RadioGroup
        aria-label={label}
        name={name}
        value={value}
        onChange={(event) => {
          onChange(event, event.target.value);
        }}
        onBlur={() => {
          ffHandler?.testFieldError(name, true);
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<SquareRadio />}
            label={<CustomText
              fontSize={1.5}
              fontFamily={fonts.medium}
              textColor={Colors.black}
              style={{
                paddingBlock: Spacing(1.5),
              }}
            >{option.label}</CustomText>}
            style={{
              height: "24px",
              marginTop: "12px"
            }}
          />
        ))}
      </RadioGroup>
      {!disableError && error && <ErrorMessage>{error}</ErrorMessage>}
    </FormControl>
  );
}

export default withTheme(InputRadios);
