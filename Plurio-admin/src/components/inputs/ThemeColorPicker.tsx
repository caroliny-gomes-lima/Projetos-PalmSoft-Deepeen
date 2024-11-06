import React, { useState } from "react";
import styled from "styled-components";
import { TextField, FormControl } from "@material-ui/core";
import FontStyles from "../styles/fontStyles";
import { Colors, Spacing } from "../../config";
import CustomText from "../others/CustomText";


const ContainerLabel = styled.div(({ theme }) => {
    return {
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
    };
});

const Label = styled.p(({ theme }) => {
    return {
        ...FontStyles.bold14,
        padding: 0,
        margin: 0,
        color: Colors.darkBlue,
        transition: ".2s",
        pointerEvents: "none",
        alignItems: "center",
        display: "flex",
        overflow: "hidden",
    };
});

const ContainerInput = styled.div(({
    theme,
}) => {
    const { palette: colors } = theme;
    return {
        padding: theme.spacing(1.962, 2.5),
        marginTop: Spacing(1.5),
        display: "flex",
        flexDirection: "row",
        justifyContent: "flexs-start",
        alignItems: "center",
        gap: 5,
        borderRadius: theme.spacing(0.6),
        backgroundColor: colors.primary.contrastText,
    };
})

const StyledTextField = styled(TextField)(({
    theme,
    $inputStyle,
    ...rest
}) => {
    return {
        ".MuiInputBase-root": {
            width: "fit-content",
        },
        ".MuiInputBase-input": {
            padding: 0,
            backgroundColor: "transparent",
            boxShadow: "transparent 0px 0px !important",
            width: Spacing(2.5),
            height: Spacing(3),
        },
        ".MuiInput-underline:before": {
            borderBottom: "none", // remove underline padrão
        },
        ".MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none", // remove underline ao hover
        },
        ".MuiInput-underline:after": {
            borderBottom: "none", // remove underline após foco
        },
        ...$inputStyle,
    };
})

export interface Props {
    id?: string;
    label?: string;
    disableError?: boolean;
    hideVisualError?: boolean;
    state?: boolean;
}



function ThemeColorPicker({ id,
    label,
}: Props) {
    const [primaryColor, setPrimaryColor] = useState("#7A12F5"); // cor inicial
    const [secondaryColor, setSecondaryColor] = useState("#10265A");

    return (

        <FormControl fullWidth>
            <ContainerLabel>
                <Label
                >
                    {label}
                </Label>
            </ContainerLabel>
            <ContainerInput>
                <StyledTextField
                    type="color"
                    value={primaryColor}
                    disableUnderline={true}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                />
                <CustomText fontSize={2}>{primaryColor}</CustomText>
            </ContainerInput>
        </FormControl>


    );
};

export default ThemeColorPicker;
