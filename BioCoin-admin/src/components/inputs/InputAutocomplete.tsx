import React from "react";
import {
  FormControl,
  TextField,
  FormHelperText,
  Popper,
  InputAdornment,
} from "@material-ui/core";
import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import { useFormFull } from "form-full";
import {
  Autocomplete,
  createFilterOptions,
  FilterOptionsState,
} from "@material-ui/lab";
import { FontStyles } from "../index";
import { Colors, fonts } from "../../config";
import { Search } from "@material-ui/icons";

export type TextInputAutoCompleteBaseProps = {
  label?: string;
  hideVisualError?: boolean;
  smallBottom?: number;
  alternativeColors?: boolean;
  heightInput?: number;
  inputStyle?: styled;
  disabled?: boolean;
  required?: string;
  readOnly?: boolean;
  placeholder?: string;
  justNumbers?: boolean;
  options: Array<{
    label: string;
    value: string | number;
  }>;
  onChange?: (event: any, value: any) => void;
  name: string;
  typeSearch?: boolean;
  labelStyle?: any;
  defaultValue?: any;
  customFilter?: (options: any[], state: FilterOptionsState<any>) => any[];
};

const StyledInput = styled(TextField)(
  ({
    theme,
    disabled,
    $inputStyle,
    $error,
    $smallBottom,
    $alternativecolors,
    $height,
  }) => {
    const { spacing, palette: colors } = theme;
    return {
      paddingBlock: spacing(1),
      paddingTop: $smallBottom === 2 ? spacing(1) : null,
      paddingInline: spacing(1),
      multiline: true,
      textOverflow: "ellipsis",
      backgroundColor: $alternativecolors
        ? colors.primary.contrastText
        : colors.primary.main,
      borderRadius: "10px",
      borderColor: "#DBDBDB",
      height: $height === 2 ? spacing(6) : null,
      boxShadow: $error
        ? `inset 0 0 0 2px ${colors.text.secondary}`
        : `inset 0 0 0 ${colors.error.main}`,

      "& .MuiInput-input": {
        color: $alternativecolors ? colors.text.secondary : colors.text.primary,
        ...FontStyles.regular16,

        "&::placeholder": {
          opacity: 0.3,
        },
      },
      "& .MuiIconButton-root": {
        color: colors.text.primary,
        paddingRight: theme.spacing(2),
      },

      ...$inputStyle,
    };
  }
);

const Label = styled.p(({ theme, $witherror, disabled, labelStyle }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.bold12,
    textTransform: "uppercase",
    position: "relative",
    top: 0,
    left: 0,
    color: $witherror ? colors.error.main : colors.text.primary,
    transition: ".2s",
    pointerEvents: "none",
    opacity: disabled && 0.6,
    ...labelStyle,
  };
});

const ErrorMessage = styled(FormHelperText)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    color: colors.text.secondary,
  };
});

const PopperSelect = styled(Popper)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    "& .MuiAutocomplete-listbox": {
      color: colors.text.primary,
      fontFamily: fonts.medium,
      fontSize: fonts.sizes.regular,
      "& li:hover": {
        color: colors.action.active,
        backgroundColor: colors.text.primary,
      },
      '& [aria-selected="true"]': {
        backgroundColor: colors.text.primary + 40,
        borderColor: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: colors.text.secondary,
        borderRadius: "15px",
        height: "2px",
      },
    },
  };
});

const AutocompleteCustom = styled(Autocomplete)(({ theme }) => {});

const useStyles = makeStyles((theme) => ({
  root: {
    border: "solid 1px",
    borderRadius: "10px",
    borderColor: "#DBDBDB",
  },
  inputRoot: {
    '&.MuiAutocomplete-inputRoot[class*="MuiInput-root"]': {
      paddingBlock: theme.spacing(1.0625),
      paddingInline: theme.spacing(2.5),
      margin: 0,
      "&::before": { display: "none" },
      "&::after": { display: "none" },
    },
  },
}));

function InputComponent(props: TextInputAutoCompleteBaseProps) {
  const { value, error, onBlur, ref, onChange, ffHandler } =
    useFormFull.field(props);

  const {
    label,
    hideVisualError,
    smallBottom,
    alternativeColors,
    heightInput,
    options,
    inputStyle,
    labelStyle,
    disabled,
    required,
    readOnly,
    placeholder = "Todos",
    justNumbers = false,
    typeSearch = false,
    customFilter,
  } = props;

  const classes = useStyles();
  let focus = false;

  React.useEffect(() => {
    if (ref && value === "") {
      const ele = ref.current.getElementsByClassName(
        "MuiAutocomplete-clearIndicator"
      )[0];
      if (ele) {
        ele.click();
      }
    }
  }, [value, ref]);

  const filterOptions = createFilterOptions({
    stringify: (option: any) => option.label?.replace(/[.,/\\-]/g, ""),
  });

  const filterOptionsDefault = createFilterOptions({
    stringify: (option: any) => option.label,
  });
 
  return (
    <FormControl fullWidth error={hideVisualError ? undefined : Boolean(error)}>
      <AutocompleteCustom
        filterOptions={
          customFilter
            ? customFilter
            : justNumbers
            ? filterOptions
            : filterOptionsDefault
        }
        ref={ref}
        key={label}
        value={
          typeof value === "string" || typeof value === "number"
            ? options.find((item) => {
                if (item.value === value) {
                  return item;
                }
              })
            : value
        }
        classes={classes}
        componentsProps={{ disableUnderline: true }}
        options={options ? options : null}
        //options={options ? [{ label: "Todos", value: "" }, ...options] : null}
        PopperComponent={(props) => {
          return <PopperSelect {...props} />;
        }}
        clearOnBlur={false}
        clearOnEscape={false}
        disabled={readOnly || disabled}
        disableUnderline={true}
        getOptionLabel={(option) => option.label || ""}
        onChange={(event, value) => {
          if (value === null || value === -1) {
            onChange(event, null);
          } else {
            onChange(event, value.value);
          }
          setTimeout(() => {
            onBlur(ffHandler?.testFieldError(props.name));
          }, 10);
        }}
        renderInput={(params) => (
          <>
            {typeSearch === true ? null : (
              <Label
                labelStyle={labelStyle}
                disabled={disabled}
                $withValue={Boolean(value) || value === 0 || focus}
                $witherror={Boolean(error) ? true : undefined}
              >
                {label}
              </Label>
            )}
            <StyledInput
              {...params}
              placeholder={typeSearch === true ? "Search…" : placeholder}
              readOnly={readOnly}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                underline: "none",
                // startAdornment: (
                //   <InputAdornment position="start">
                //     {typeSearch === true ? <Search /> : null}
                //   </InputAdornment>
                // ),
                endAdornment: (
                  <InputAdornment position="start">
                    {typeSearch === true ? (
                      <Search style={{ color: Colors.gray }} />
                    ) : null}
                  </InputAdornment>
                ),
              }}
              onFocus={() => (focus = true)}
              disableUnderline={true}
              required={required}
              $inputStyle={inputStyle}
              $alternativecolors={alternativeColors}
              $height={heightInput}
              $smallBottom={smallBottom}
              $error={Boolean(error)}
              error={Boolean(error)}
            />
          </>
        )}
      />
      {!hideVisualError ? (
        <ErrorMessage error={Boolean(error)}>
          {Boolean(error) ? error : " "}
        </ErrorMessage>
      ) : null}
    </FormControl>
  );
}

export default withTheme(InputComponent);
