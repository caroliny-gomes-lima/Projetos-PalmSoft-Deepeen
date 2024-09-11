import React from "react";
import Styles from "./Styles";

function FilterContainerComponent({ styledStyles, title, children }) {
    return (
        <Styles.FilterContainer $styles={styledStyles}>
            <Styles.FilterTitle>{title}</Styles.FilterTitle>
            {children}
        </Styles.FilterContainer>
    );
}

export default React.memo(FilterContainerComponent);
