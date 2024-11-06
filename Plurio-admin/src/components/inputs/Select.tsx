import React from "react";
import {
    Select,
    MenuItem,
    FormHelperText,
    FormControl,
    Input,
} from "@material-ui/core";

import styled from "styled-components";

import { useFormFull } from "form-full";

import FontStyles from "../styles/fontStyles";
import { Spacing } from "../../config";
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
    name: string;
    disableError?: boolean;
    white?: boolean;
    defaultValue?: any;
    containerStyles?: any;
    customInput?: any;
    $maxHeight?: any;
    onChangeCustom?: any;
    onBlurCustom?: any;
};

const StyledInput = styled(Input)(
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
        return {
            "&&.MuiInput-root": {
                ...FontStyles.medium12,
                padding: theme.spacing(1.962, 2.5),
                alignItems: $minHeight && "flex-start",
                paddingTop: $minHeight && Spacing(2.5),
                marginTop: Spacing(1.5),
                multiline: true,
                minHeight: $minHeight && Spacing(20),
                textOverflow: "ellipsis",
                color: error ? "red" : theme.palette.text.primary,
                backgroundColor: theme.palette.primary.contrastText,
                borderBottom: "0px",
                borderRadius: theme.spacing(0.6),
                "& .MuiInputBase-input": {
                    padding: 0,
                    backgroundColor: "transparent",
                    boxShadow: "transparent 0px 0px !important",
                },
                ...$inputStyle,
            },
        };
    }
);
const StyledFormControl = styled(FormControl)(({ theme }) => {
    return {};
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => {
    const { palette: colors } = theme;
    return {
        "&&.MuiMenuItem-root": {
            ...FontStyles.medium12,
            "&.MuiListItem-button:hover": {
                color: "white",
                backgroundColor: colors.text.primary,
            },
            "&.Mui-focusVisible": {
                backgroundColor: "transparent",
            },
            "&.Mui-selected": {
                backgroundColor: "#E6EFEE50",
            },

            "& .MuiPaper-root": {
                backgroundColor: "red",
            },
        }
    };
});

const StyledSelect = styled(Select)(({ theme, $withError, disabled }) => {
    const { palette: colors, spacing } = theme;
    return {
        ...FontStyles.medium12,
        color: colors.text.primary,
        padding: spacing(1),
        backgroundColor: colors.primary.contrastText,
        borderRadius: spacing(0.7),
        marginTop: spacing(1.5),
        opacity: disabled ? 0.6 : 1,
        border: $withError
            ? `1px solid ${colors.background.secondary}`
            : "0px solid red",

        "& .MuiSelect-select": {
            paddingLeft: spacing(1),
            ...FontStyles.medium12,
        },
        "& .MuiSelect-icon": {
            color: colors.text.primary,
        },
    };
});

const Label = styled.p(({ theme, $withError, $color, white }) => {
    const { palette: colors } = theme;
    return {
        ...FontStyles.bold14,
        textTransform: "unset",
        padding: 0,
        margin: 0,
        color: $withError
            ? colors.error.main
            : white
                ? "white"
                : colors.text.primary,
        transition: ".2s",
        pointerEvents: "none",
        alignItems: "center",
        display: "flex",
        overflow: "hidden",
    };
});

function SelectComponent(props: TextInputAutoCompleteBaseProps) {
    const { value, error, onChange, onBlur, ref, ffHandler } =
        useFormFull.field(props);

    const { name, onChangeCustom } = props;
    const onSelectValue = React.useCallback(
        (event) => {
            try {
                onChange(event, event.target.value);
                onChangeCustom && onChangeCustom(event.target.value, ffHandler);
            } catch (err) { }
            setTimeout(() => {
                onBlur(event);
                ffHandler?.testFieldError(name, false);
            }, 10);
        },
        [onChange, onBlur, ffHandler, name, onChange]
    );

    const {
        containerStyles,
        label,
        customInput,
        $maxHeight,
        required,

        options,
        disableError,

        alternativeColors = false,
        disabled,
        readOnly,
        white,
        onBlurCustom,
    } = props;

    return (
        <StyledFormControl
            style={containerStyles}
            fullWidth
            error={Boolean(error)}
            required={Boolean(required)}
            $maxHeight={$maxHeight}
            onMouseUp={(event) => event.stopPropagation()}
        >
            <Label
                white={white}
                $withValue={Boolean(value) || value === 0}
                $withError={Boolean(error)}
                $maxHeight={$maxHeight}
            >
                {label}
            </Label>
            <StyledSelect
                white={white}
                readOnly={readOnly}
                disabled={disabled}
                required={!!required}
                $withError={Boolean(error)}
                $alternativeColors={alternativeColors}
                disableUnderline
                ref={ref}
                value={value}
                $maxHeight={$maxHeight}
                onChange={onSelectValue}
                onBlur={(e) => {
                    onBlurCustom();
                }}
                onMouseUp={(event) => event.stopPropagation()}
                input={
                    customInput ? (
                        <StyledInput
                            white={white}
                            readOnly={readOnly}
                            disabled={disabled}
                            $maxHeight={$maxHeight}
                        />
                    ) : null
                }
            >
                {options?.map((option) => (
                    <StyledMenuItem value={option.value}>{option.label}</StyledMenuItem>
                ))}
            </StyledSelect>
            {disableError ? null : (
                <FormHelperText>{error ? error : " "}</FormHelperText>
            )}
        </StyledFormControl>
    );
}

export default SelectComponent;
