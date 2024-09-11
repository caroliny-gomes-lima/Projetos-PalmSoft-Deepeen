import React from "react";
import Styles from "../Styles/OperatorStyle";

function FilterContainerComponent({ styledStyles, title, children, bgColor }) {
  return (
    <Styles.FilterContainer $styles={styledStyles} $background={bgColor}>
      <Styles.FilterTitle>{title}</Styles.FilterTitle>
      {children}
    </Styles.FilterContainer>
  );
}

export default React.memo(FilterContainerComponent);
