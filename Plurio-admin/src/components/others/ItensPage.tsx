import React from "react";
import styled from "styled-components";
import { Select, MenuItem } from "@material-ui/core";
import { IoIosArrowDown } from "react-icons/io";
import FontStyles from "../styles/fontStyles";
import CustomText from "./CustomText";
import { Colors, fonts } from "../../config";

const PageSelect = styled(Select)(({ theme, alternative }) => {
    const { spacing, palette: colors } = theme;
    return {
        "&&.MuiInputBase-root": {
            ...FontStyles.regular12,
            width: spacing(6),
            height: spacing(4),
            padding: "6px",
            //paddingInline: "5px",
            //marginRight: spacing(1.875),
            color: "white",
            backgroundColor: Colors.darkBlue,
            border: "0.669px solid #D9D9D9",
            borderRadius: spacing(1),
            "& .MuiFilledInput-input": {
                "$hover $notchedOutline": { borderColor: "black" },
                padding: 0,
                ...FontStyles.regular12,
                color: "white",
            },
            "& .MuiSelect-icon": {
                alignSelf: "center",
                width: spacing(2),
                height: spacing(1.8),
                top: "8px",
                right: "5px",
                color: "white",
                fill: "white",
            },
        },
    };
});

const ItemMenu = styled(MenuItem)(({ theme, $color }) => {
    const { spacing, palette: colors } = theme;
    return {
        "&&.MuiMenuItem-root": {
            width: spacing(5),
            height: spacing(5),
            padding: "2px",
            paddingInline: "5px",
            ...FontStyles.regular12,

            "&.Mui-selected": {
                backgroundColor: Colors.darkBlue,
                color: "white",
            },
            "&:hover": {
                backgroundColor: Colors.darkBlue + 90,
                color: "white",
            },
        },
    };
});

function ItensPage({ sizes, setTotal, currentSize }: any) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "6px",
                paddingBottom: "8px",
            }}
        >
            <CustomText fontFamily={fonts.regular} fontSize={1.75} textColor="black">
                Itens por página:
            </CustomText>
            <PageSelect
                variant="filled"
                labelId="Seleção-da-total"
                id="Seleção-da-total"
                value={currentSize}
                onChange={(value) => {
                    setTotal(value.target.value);
                }}
                IconComponent={IoIosArrowDown}
                disableUnderline={true}
                label="Pagina"
            >
                {checkTotalPages(sizes, currentSize)}
            </PageSelect>

        </div>
    );
}

export default React.memo(ItensPage);

const checkTotalPages = (sizes, currentSize) => {
    let components: any = [];
    for (let i = 0; i < sizes.length; i++) {
        components.push(
            <ItemMenu
                key={"key_" + (i + 1)}
                selected={sizes[i] === currentSize}
                value={sizes[i]}
            >
                {sizes[i]}
            </ItemMenu>
        );
    }

    return components;
};
