import {
  DatePickerView,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import dateFns from "@date-io/date-fns";
import styled from "styled-components";
import FontStyles from "../styles/fontStyles";
import {
  createMuiTheme,
  FormControl,
  TextFieldProps,
  Theme,
  ThemeProvider,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import brLocate from "date-fns/locale/pt-BR";
import { Colors, fonts, Spacing } from "../../config";
import { useFormFull } from "form-full";
import { validations } from "../../utils";
import { WrapperVariant } from "@material-ui/pickers/wrappers/Wrapper";
import colors from "../../config/colors";

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
  maxDate?: string;
  autoComplete?: string;
  end?: string;
  restProps?: any;
  name: string;
  justifyFlexEnd?: boolean,
};

const customTheme: Theme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: colors.purple,
        [`@media (max-width:${581 - 1}px)`]: {
          height: Spacing(6.25),
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: Colors.softWhite,

        height: 50,
        fontFamily: fonts.medium,
        fontSize: fonts.sizes.small,
        "&:hover": {
          backgroundColor: Colors.softWhite,
        },
        "&$focused": { backgroundColor: "white" },
        borderRadius: "4.8px !important",
      },
      input: {
        padding: "6px 8px 7px 8px",
      },
    },
    MuiIconButton: {
      root: {
        color: Colors.darkBlue,
        paddingInline: "0px",
        "&:hover": {
          backgroundColor: "unset",
        },
      },
    },

    MuiPickersToolbarText: {
      toolbarTxt: {
        fontFamily: fonts.regular,
        color: colors.white,
      },
      toolbarBtnSelected: {
        color: colors.white,
      },
    },
    // Header
    MuiPickersCalendarHeader: {
      // Arrow
      iconButton: {
        backgroundColor: "transparent",
        color: colors.darkBlue,
        [`@media (max-width:${581 - 1}px)`]: {
          marginInline: Spacing(1.5),
        },
      },
      // Texto dia da semana
      dayLabel: {
        fontFamily: fonts.regular,
        color: colors.darkBlue,
        [`@media (max-width:${581 - 1}px)`]: {
          fontSize: Spacing(1),
        },
      },
    },
    // Header e corpo texto
    MuiTypography: {
      // Header texto mês e ano
      alignCenter: {
        fontFamily: fonts.regular,
        color: colors.darkBlue,
        [`@media (max-width:${581 - 1}px)`]: {
          fontSize: Spacing(1.5),
        },
      },
      // Corpo dias
      body2: {
        fontFamily: fonts.regular,
        color: colors.darkBlue,
        [`@media (max-width:${581 - 1}px)`]: {
          fontSize: Spacing(1.5),
        },
      },
    },
    // Corpo
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: colors.white,
        [`@media (max-width:${581 - 1}px)`]: {
          minHeight: "300px",
        },
      },
    },
    // Dias
    MuiPickersDay: {
      // Dias
      day: { color: colors.darkBlue },
      // Dia selecionado
      daySelected: {
        backgroundColor: colors.purple,
        color: colors.whiteSmoke,
        "&:hover": {
          backgroundColor: colors.purple + "E6",
          color: "white",
        },
      },
      // Dia atual
      current: { color: "#3f51b5" },
    },
    // Footer
    MuiDialogActions: {
      root: {
        backgroundColor: colors.purple,
        [`@media (max-width:${581 - 1}px)`]: {
          padding: Spacing(0, 1, 1, 0),
        },
      },
    },
    // Footer botões
    MuiButton: {
      root: { minWidth: "32px" },
      label: {
        color: colors.white,
        fontFamily: fonts.bold,
        [`@media (max-width:${581 - 1}px)`]: {
          fontSize: Spacing(1.4),
          width: "auto",
        },
      },
      text: {
        [`@media (max-width:${581 - 1}px)`]: {
          padding: Spacing(0),
        },
      },
    },
    // Texto ano
    MuiPickersYear: {
      root: { fontFamily: fonts.regular },
      yearSelected: { color: colors.purple },
    },
    // Texto mês
    MuiPickersMonth: {
      monthSelected: { color: colors.purple },
    },
  },
} as any);

const LabelView = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
    marginBottom: Spacing(1.5),
  };
});

const Label = styled.p(({ theme, $witherror }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.bold14,
    textTransform: "unset",
    color: $witherror ? colors.error.main : Colors.darkBlue,
    transition: ".2s",
    pointerEvents: "none",
    padding: 0,
    margin: 0,
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
  };
});

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
    justifyFlexEnd,
    end,
    ...restProps
  } = props;
  return (
    <FormControl style={{ display: "flex", justifyContent: justifyFlexEnd ? "flex-end" : "center" }} fullWidth error={Boolean(error)}>
      <MuiPickersUtilsProvider locale={brLocate} utils={dateFns}>
        <LabelView>
          <Label $witherror={Boolean(error) ? true : undefined}>
            {label}
            {Boolean(required)}
          </Label>
        </LabelView>
        <ThemeProvider theme={customTheme}>
          <KeyboardDatePicker
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
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </FormControl>
  );
}

export default InputDateComponent;
