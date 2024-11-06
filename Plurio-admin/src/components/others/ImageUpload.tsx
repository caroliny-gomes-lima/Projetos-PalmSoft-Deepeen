import { IconButton } from "@material-ui/core";
import { MdUpload } from "react-icons/md";
import styled from "styled-components";
import FontStyles from "../styles/fontStyles";
import { Colors } from "../../config";
import CustomText from "./CustomText";

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
        marginTop: theme.spacing(1.5),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: theme.spacing(0.6),
        backgroundColor: colors.primary.contrastText,
    };
})

const StyledIconButton = styled(IconButton)(({
    theme,
}) => {
    const { palette: colors } = theme;
    return {
        padding: '0 !important',
        color: `${colors.primary.main} !important`
    };
})

export interface Props {
    id?: string;
    label?: string;
    disableError?: boolean;
    hideVisualError?: boolean;
    placeholder?: string;
    state?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ImageUpload({ id,
    label,
    placeholder,
    onChange,
}: Props) {
    return (
        <>
            <ContainerLabel>
                <Label
                >
                    {label}
                </Label>
            </ContainerLabel>
            <ContainerInput>
                <CustomText>
                    {placeholder}
                </CustomText>
                <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="image-upload"
                    type="file"
                    onChange={onChange}
                />
                <label htmlFor="image-upload">
                    <StyledIconButton component="span">
                        <MdUpload />
                    </StyledIconButton>
                </label>
            </ContainerInput>
        </>
    );
}

export default ImageUpload;
