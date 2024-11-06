import styled from "styled-components";
import { ButtonContained, ButtonOutlined, ButtonText, FontStyles } from "../../../components";

const FirstContainer = styled.div(({ theme }) => {
    return {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: theme.palette.primary.main,
        padding: "20px 20px",
        marginBottom: theme.spacing(1.5),
        borderRadius: "10px",
        flex: 1,
        width: "100%",
        height: "fit-content",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "8px",
        },
    };
});

const FirstContent = styled.div(({ theme }) => {
    return {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.75),
    };
});

const RegitryButton = styled(ButtonContained)(({ theme, $defaultColor }) => {
    const { palette: colors, spacing } = theme;
    return {
        "&&.MuiButton-root": {
            backgroundColor: $defaultColor ? $defaultColor : "white",
            color: $defaultColor ? "white" : colors.primary.main,
            marginTop: 0,
            ...FontStyles.medium14,

            "&:hover": {
                backgroundColor: $defaultColor ? $defaultColor + 90 : colors.primary.contrastText,
            },

            "& .MuiButton-label": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
        },
    };
});



const SecondContainer = styled.div(({ theme }) => {
    return {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        padding: "16px 20px",
        borderRadius: "10px",
        flex: 1,
        width: "100%",
        marginBottom: theme.spacing(1.5),
    };
});

const FilterContainer = styled.div(({ theme, noLine }) => {
    return {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        padding: "16px 20px",
        paddingInline: noLine && 0,
        borderRadius: "5px",

        width: "100%",
        marginBottom: theme.spacing(1.5),
        height: "fit-content",
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

const Submit = styled(ButtonContained)(({ theme }) => {
    return {
        "&&.MuiButton-root": {
            backgroundColor: theme.palette.primary.main,
            ...FontStyles.semibold12,
            paddingInline: theme.spacing(2.5),
            paddingBlock: theme.spacing(1.9),
        },
    };
});

const Clear = styled(ButtonText)(({ theme }) => {
    return {
        "&&.MuiButton-root": {
            color: theme.palette.text.primary,
            ...FontStyles.semibold12,
            paddingInline: theme.spacing(2.5),
            paddingBlock: theme.spacing(1.9),
        },
    };
});

const CancelButton = styled(ButtonOutlined)(({ theme }) => {
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

const BoxDataInfo = styled.p(({ theme }) => {
    const { spacing, palette: colors } = theme;
    return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: spacing(2),
        backgroundColor: colors.secondary.main,
        color: colors.text.primary,
        width: "100%",
        margin: 0,
    };
});


const Styles = {
    FirstContainer,
    FirstContent,
    RegitryButton,
    SecondContainer,
    FilterContainer,
    ButtonContainer,
    Submit,
    Clear,
    CancelButton,
    BoxDataInfo,
};

export default Styles;
