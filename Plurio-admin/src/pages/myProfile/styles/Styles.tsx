import styled from "styled-components";
import { ButtonContained, ButtonOutlined, FontStyles } from "../../../components";

const FirstContainer = styled.div(({ theme, noLine }) => {
    return {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        padding: "16px 20px",
        paddingInline: noLine && 0,
        borderRadius: "5px",
        marginBottom: theme.spacing(1.5),
        width: "auto",
        height: "fit-content",
    };
});

const FirstContent = styled.div(({ theme }) => {
    return {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: theme.spacing(0.75),
    };
});

const ButtonContainer = styled.div(({ theme }) => {
    return {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        gap: theme.spacing(1),
        paddingTop: theme.spacing(1),
    };
});

const ClearButton = styled(ButtonOutlined)(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        "&&.MuiButton-root": {
            marginTop: 0,
            ...FontStyles.medium14,
            color: colors.text.primary,
            paddingInline: spacing(2),
            "& .MuiButton-label": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
        },
    };
});

const RegitryButton = styled(ButtonContained)(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        "&&.MuiButton-root": {
            backgroundColor: colors.primary.main,
            color: "white",
            marginTop: 0,
            ...FontStyles.medium14,

            "&:hover": {
                backgroundColor: colors.primary.main + 90,
            },

            "& .MuiButton-label": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
        },
    };
});

const Styles = {
    FirstContainer,
    FirstContent,
    RegitryButton,
    ClearButton,
    ButtonContainer
};

export default Styles;
