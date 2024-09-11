import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Spacing, MediaQueries } from "../../config";
import { formConnector } from "../../FormConfig";

const StyledButton = styled(Button)(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing(1, 0, 0, 0),
        minWidth: "45px",
        height: "100%",
        flexShrink: 0,
        overflow: "hidden",
        color: colors.text.secondary,
        borderColor: colors.text.secondary,
        [MediaQueries.xsDown]: {
            borderColor: "none",
            minWidth: "30px",
        },
    };
});

const StyledCircularProgress = styled(CircularProgress)(({ theme, $show }) => {
    const { palette: colors } = theme;
    return {
        position: "absolute",
        color: colors.primary.main,
        transition: ".5s",
        opacity: $show ? 1 : 0,
    };
});

const ChidrenContainer = styled.div(({ $show }) => {
    return {
        transition: ".5s",
        opacity: $show ? 1 : 0.5,
    };
});

function ButtonIconComponent({
    fullWidth = true,
    loading,
    children,
    type,
    disebled,
    name,
    ...props
}) {
    const { disabled: StatusDisabled, onClick, ref } = formConnector.useFormButton(
        {
            type,
            disebled,
            name,
        }
    );
    return (
        <StyledButton
            variant="outlined"
            ref={ref}
            type={null}
            fullWidth={fullWidth}
            diabled={StatusDisabled}
            onClick={onClick}
            {...props}
        >
            <StyledCircularProgress size={Spacing(3)} $show={loading} />
            <ChidrenContainer $show={!loading}>{children}</ChidrenContainer>
        </StyledButton>
    )
}

export default ButtonIconComponent;