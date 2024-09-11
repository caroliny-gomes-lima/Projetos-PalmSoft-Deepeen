import React from "react";
import Styles from "../Styles/ExtraHoursStyle";

function FilterContainerComponent({
  styledStyles,
  title,
  children,
  bgColor,
  flexInput,
  containerHeight,
  typeFont,
  marginFont,
}) {
  return (
    <Styles.FilterContainer
      $styles={styledStyles}
      $background={bgColor}
      $flexInput={flexInput}
      $containerHeight={containerHeight}
    >
      <Styles.FilterTitle $marginFont={marginFont} $typeFont={typeFont}>
        {title}
      </Styles.FilterTitle>
      {children}
    </Styles.FilterContainer>
  );
}

export default React.memo(FilterContainerComponent);
