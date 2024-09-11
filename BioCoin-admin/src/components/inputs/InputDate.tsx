import {
  DatePickerView,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import dateFns from "@date-io/date-fns";
import styled from "styled-components";
import FontStyles from "../styles/fontStyles";
import { FormControl } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import brLocate from "date-fns/locale/pt-BR";
import { Colors, Spacing, fonts } from "../../config";
import { useFormFull } from "form-full";
import { validations } from "../../utils";
import { WrapperVariant } from "@material-ui/pickers/wrappers/Wrapper";

export type TextInputDateBaseProps = {
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
  minDate?: any;
  maxDate?: any;
  autoComplete?: string;
  end?: string;
  restProps?: any;
  name: string;
};

// const customTheme: Theme = createTheme({
//   overrides: {
//     MuiFilledInput: {
//       root: {
//         borderRadius: 20,
//         height: 50,
//         fontFamily: fonts.medium,
//         fontSize: fonts.sizes.regular,
//         backgroundColor: Colors.white,
//         "&:hover": {
//            backgroundColor: Colors.white,
//         },
//       },
//       input: {
//         padding: "6px 8px 7px 8px",
//         borderRadius: 20,
//       },
//     },
//     MuiIconButton: {
//       root: {
//         backgroundColor: Colors.darkerGray,
//         color: Colors.darkerGray,
//       },
//     },
// MuiCardHeader:{
//   root:{  backgroundColor: Colors.darkerGray},
// },
//     MuiTypography: {
//       alignCenter: {
//         color: Colors.darkerGray,
//       },
//     },
//     MuiInputBase:{
//       root:{
//         backgroundColor: Colors.darkerGray,
//         borderRadius: 20,
//       }
//     },
//     MuiButton: {
//       label: {
//         color: Colors.yellow,
//       },
//     },
//   },
// });

const Label = styled.p(({ theme, $witherror }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.regular18,
    fontSize: "14.007px",
    color: $witherror ? colors.error.main : colors.text.primary,
    transition: ".2s",
    marginTop: spacing(0),
    marginBottom: spacing(1),
  };
});

const InputDate = styled(KeyboardDatePicker)(
  ({
    theme,
    error,
    disabled,
    $inputStyle,
    $error,
    $small,

    $minHeight,
    ...rest
  }) => {
    const { spacing } = theme;
    return {
      ".MuiInputBase-root": {
        padding: theme.spacing(1.965),
        alignItems: $minHeight && "flex-start",
        fontFamily: fonts.medium,
        fontSize: "14.007px",
        multiline: true,
        textOverflow: "ellipsis",
        color: error ? "red" : "black",
        background: "rgba(27, 30, 34, 0.30)",
        borderBottom: "0px",
        borderRadius: 12,
        "&:hover": {
          background: "rgba(27, 30, 34, 0.30)",
        },
        "& .MuiInputBase-input": {
          padding: 0,
          "&::placeholder": {
            opacity: 0.3,
          },
        },
        "& .MuiIconButton-root": {
          color: "black",
        },
        ...$inputStyle,
      },
      // datePicker: {
      //   color: "red",
      //   textColor: "red",
      //   calendarTextColor: "red",
      //   selectColor: "red",
      //   selectTextColor: "red",
      //   calendarYearBackgroundColor: "red",
      //   headerColor: "red",
      // },
    };
  }
);

function InputDateComponent(props: TextInputDateBaseProps) {
  const { value, error, onBlur, onChange, ref, ffHandler } = useFormFull.field({
    ...props,
    validation: (data) =>
      validations.inputDate(data, props.maxDate, props.minDate),
  });

  const {
    label,
    icon,
    theme,
    required,
    disableError,
    borderRadius,
    variant,
    inputStyle,
    views = ["year", "month", "date"],
    autoOk = true,
    format,
    readOnly,
    minDate,
    maxDate,
    alternativeColors,
    autoComplete,
    end,
    ...restProps
  } = props;
  return (
    <FormControl fullWidth error={Boolean(error)}>
      <MuiPickersUtilsProvider locale={brLocate} utils={dateFns}>
        <Label $witherror={Boolean(error) ? true : undefined}>
          {label}
          {Boolean(required)}
          {required && "*"}
        </Label>

        <InputDate
          {...restProps}
          {...(readOnly ? { open: !readOnly } : {})}
          inputVariant="filled"
          format={format ? format : "dd/MM/yyyy"}
          minDate={
            typeof minDate !== "string" && minDate !== null
              ? minDate
              : undefined
          }
          maxDate={
            typeof maxDate !== "string" && maxDate !== null
              ? maxDate
              : undefined
          }
          InputProps={{
            disableUnderline: true,
            readOnly: readOnly,
          }}
          value={value ? value : null}
          required={Boolean(required)}
          variant={variant}
          fullWidth
          views={views}
          inputRef={ref}
          autoOk={autoOk}
          onChange={(date) => {
            onChange(null, date);
            setTimeout(() => {
              onBlur(ffHandler?.testFieldError(props.name));
            }, 10);
          }}
          error={Boolean(error)}
          helperText={disableError ? null : error ? error : " "}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  );
}

export default InputDateComponent;
