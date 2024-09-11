import React from "react";
import Style from "../styles/TurnsStyles";

function FilterContainerComponent({ styledStyles, title, children, bgColor }) {
  return (
    <Style.FilterContainer $styles={styledStyles} $background={bgColor}>
      <Style.FilterTitle>{title}</Style.FilterTitle>
      {children}
    </Style.FilterContainer>
  );
}

export default React.memo(FilterContainerComponent);
