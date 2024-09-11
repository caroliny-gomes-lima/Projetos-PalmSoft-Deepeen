import {
  DatePicker,
  DatePickerView,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Spacing, fonts } from "../../config";
import dateFns from "@date-io/date-fns";
import brLocate from "date-fns/locale/pt-BR";
import { useFormFull } from "form-full";
import styled from "styled-components";
import { WrapperVariant } from "@material-ui/pickers/wrappers/Wrapper";
import { TextFieldProps } from "@material-ui/core";
import FontStyles from "../styles/fontStyles";

export type TextInputDateMMyyyyBaseProps = {
  label?: string;
  alternativeColors?: boolean;
  inputStyle?: styled;
  required?: string;
  readOnly?: boolean;
  icon?: any;
  theme?: any;
  disableError?: boolean;
  borderRadius?: any;
  variant?: WrapperVariant;
  views?: DatePickerView[];
  autoOk?: boolean;
  format?: string;
  minDate?: string;
  maxDate?: string;
  autoComplete?: string;
  end?: string;
  restProps?: any;
  name: string;
  color?: string;
};

const InputDate = styled(DatePicker)(({ theme, error }) => {
  const { palette: colors } = theme;
  return {
    ".MuiInputBase-root": {
      margin: 0,
      border: 0,
      borderRadius: 5,
      color: colors.text.primary,
      backgroundColor: "white",
      fontFamily: fonts.medium,
      fontSize: fonts.sizes.regular,
      padding: "6px 8px 7px 8px",
      "& input": {
        padding: "6px 8px 7px 8px",
        "&::placeholder": {
          opacity: 0.8,
        },
      },
      "& fieldset": {
        border: error ? null : 0,
      },
    },
  };
});

const Label = styled.p(({ theme, $witherror }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.semibold14,
    textTransform: "uppercase",
    color: $witherror ? colors.error.main : colors.text.secondary,
    transition: ".2s",
    pointerEvents: "none",
  };
});

function InputDateYYYYComponent(props: TextInputDateMMyyyyBaseProps) {
  const { value, error, onChange, ref } = useFormFull.field(props);

  const {
    label,
    icon,
    theme,
    required,
    color,
    disableError,
    borderRadius,
    variant = "outlined",
    inputStyle,
    autoOk = true,
    format,
    readOnly,
    minDate,
    maxDate,
    alternativeColors,
    autoComplete,
    ...restProps
  } = props;

  return (
    <MuiPickersUtilsProvider locale={brLocate} utils={dateFns}>
      <Label $witherror={Boolean(error) ? true : undefined}>
        {label}
        {Boolean(required)}
      </Label>
      <InputDate
        {...restProps}
        $alternativecolors={alternativeColors}
        {...(readOnly ? { open: !readOnly } : {})}
        inputVariant="outlined"
        minDate={minDate}
        maxDate={maxDate}
        InputProps={{
          disableUnderline: true,
        }}
        inputProps={{
          disableUnderline: true,
          readOnly,

          style: {
            padding:
              variant === "outlined" && color === "secondary"
                ? Spacing(1)
                : null,
          },
        }}
        value={value ? value : null}
        required={Boolean(required)}
        variant={variant}
        color={color}
        fullWidth
        disableFuture
        openTo="year"
        views={["year"]}
        inputRef={ref}
        autoOk={autoOk}
        onChange={(date) => {
          onChange(null, date);
        }}
        error={Boolean(error)}
        helperText={disableError ? null : error ? error : " "}
      />
    </MuiPickersUtilsProvider>
  );
}

export default InputDateYYYYComponent;
