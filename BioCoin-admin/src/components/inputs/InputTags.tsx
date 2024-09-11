import React from "react";
import {
  FormControl,
  TextField,
  FormHelperText,
  Popper,
  TextFieldProps,
} from "@material-ui/core";
import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { useFormFull } from "form-full";
import { Autocomplete } from "@material-ui/lab";
import { FontStyles, Tag, Tooltip } from "../index";
import { makeStyles } from "@material-ui/core";
import { Colors, fonts } from "../../config";

export type TextInputTagsBaseProps = {
  label?: string;
  hideVisualError?: boolean;
  small?: boolean;
  smallBottom?: number;
  alternativeColors?: boolean;
  noOptionsText?: boolean;
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
  tooltip?: any;
  name: string;
  disableError?: boolean;
};

const StyledInput = styled(TextField)(
  ({ theme, $inputStyle, $error, $alternativecolors, $smallBottom }) => {
    const { spacing, palette: colors } = theme;
    return {
      paddingBlock: spacing(1),
      paddingTop: $smallBottom === 2 ? spacing(1) : null,
      paddingInline: spacing(3),
      multiline: true,
      justifyContent: "center",
      alignItems: "center",
      textOverflow: "ellipsis",
      backgroundColor: $alternativecolors
        ? colors.text.secondary
        : Colors.gray,
      borderRadius: spacing(3),
      height: spacing(6),
      boxShadow: $error
        ? `inset 0 0 0 2px ${colors.text.secondary}`
        : `inset 0 0 0 ${colors.error.main}`,

      "& .MuiInput-input": {
        color: $alternativecolors ? colors.text.secondary : colors.text.primary,
        fontFamily: fonts.medium,
        fontSize: fonts.sizes.regular,
        "&::placeholder": {
          opacity: 0.3,
        },
      },
      "& .MuiIconButton-root": {
        color: colors.text.primary,
        paddingRight: theme.spacing(2)
      },
      ...$inputStyle,
    };
  }
);

const Label = styled.p(({ theme, $witherror }) => {
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
  };
});

const ErrorMessage = styled(FormHelperText)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    color: colors.error.main,
  };
});

const PopperSelect = styled(Popper)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    "& .MuiAutocomplete-listbox": {
      color: colors.text.primary,
      "& li:hover": {  color: colors.action.active, backgroundColor: colors.text.primary},
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

const LabelView = styled.div(() => {
  return {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
  };
});
const ShowMoreButton = styled.a(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.bold12,
    color: colors.text.secondary,
    marginLeft: spacing(1),
    cursor: "pointer",
    borderBottom: `1px solid ${colors.text.secondary}`,
  };
});

const useStyles = makeStyles((theme) => ({
  root: {},
  inputRoot: {
    '&.MuiAutocomplete-inputRoot[class*="MuiInput-root"]': {
      paddingInline: theme.spacing(2.5),
      "&::before": { display: "none" },
      "&::after": { display: "none" },
    },
  },
  tag:{
    color: Colors.yellow,
    backgroundColor: Colors.black,
    "& .MuiChip-deleteIcon": {
      color: Colors.yellow,
    },
  }
}));

function InputTags(props: TextInputTagsBaseProps) {
  const { value, error, onChange } = useFormFull.field(props);

  const {
    label,
    hideVisualError,
    small,
    smallBottom,
    alternativeColors,
    options,
    inputStyle,
    disabled,
    required,
    noOptionsText,
    tooltip,
    disableError,
    readOnly,
    placeholder = "Todos",
  } = props;

  let focus = false;
  const classes = useStyles();

  const [show, setShow] = React.useState(false);

  const RemoveDuplicates = (list) => {
    var valueArr = list.map(function (item) {
      return item.value;
    });
    var isDuplicate = valueArr.some(function (item, idx) {
      return valueArr.indexOf(item) !== idx;
    });

    if (isDuplicate) {
      var toRemove = list
        .map((e) => e["value"])
        .map((e, i, final) => final.indexOf(e) !== i && i)
        .filter((obj) => list[obj])
        .map((e) => list[e]["value"]);

      const newList = list.filter(function (el) {
        return el.value !== toRemove[0];
      });
      return newList;
    } else {
      return list;
    }
  };

  return (
    <FormControl fullWidth error={hideVisualError ? undefined : Boolean(error)}>
      <Autocomplete
        noOptionsText={noOptionsText}
        classes={classes}
        defaultValue={value?.length > 0 ? value : []}
        value={value?.length > 0 ? value : []}
        multiple
        forcePopupIcon={true}
        id="tags-filled"
        options={options ? options : []}
        disabled={disabled}
        disableClearable
        PopperComponent={(props) => {
          return <PopperSelect {...props} />;
        }}
        getOptionLabel={(option) => option?.label || ""}
        onChange={(event, value) => {
          if (value === null) {
            onChange(event, -1);
          } else {
            onChange(event, RemoveDuplicates(value));
          }
        }}
        renderInput={(params) => (
          <>
            <LabelView>
              <Label
                $withValue={Boolean(value) || value === 0 || focus}
                $witherror={Boolean(error) ? true : undefined}
              >
                {label}
              </Label>
              {tooltip && (
                <Tooltip title={tooltip?.title} tip={tooltip?.content} />
              )}
            </LabelView>

            <StyledInput
              placeholder={value?.length > 0 ? "" : placeholder}
              readOnly={readOnly}
              required={required}
              onFocus={() => (focus = true)}
              $inputStyle={inputStyle}
              $alternativecolors={alternativeColors}
              $small={small}
              $smallBottom={smallBottom}
              $error={Boolean(error)}
              error={Boolean(error)}
              {...params}
            />
          </>
        )}
        renderTags={(values: any, getTagProps: any) => {
          const selected: any[] = [];
          const clearValues = RemoveDuplicates(values);

          if (clearValues.length > 0) {
            if (!show) {
              for (let i = 0; i < 3; i++) {
                if (Boolean(clearValues[i])) {
                  selected.push(
                    <Tag
                      tabindex={clearValues[i].value}
                      label={clearValues[i].label}
                      {...getTagProps({ index: i })}
                    />
                  );
                }
              }
              if (clearValues?.length > 3) {
                selected.push(
                  <>
                    <ShowMoreButton onClick={() => setShow(true)}>
                      {`mais ${clearValues?.length - selected?.length}...`}
                    </ShowMoreButton>
                  </>
                );
              }
            } else {
              for (let i = 0; i < clearValues.length; i++) {
                selected.push(
                  <Tag
                    tabindex={clearValues[i].value}
                    label={clearValues[i].label}
                    {...getTagProps({ index: i })}
                  />
                );
              }
              selected.push(
                <>
                  <ShowMoreButton onClick={() => setShow(false)}>
                    mostrar menos
                  </ShowMoreButton>
                </>
              );
            }
          } else {
            return null;
          }

          return selected.map((option) => option);
        }}
      />
      {disableError ? null : (
        <ErrorMessage error={Boolean(error)}>
          {Boolean(error) ? error : " "}
        </ErrorMessage>
      )}
    </FormControl>
  );
}

export default withTheme(InputTags);
