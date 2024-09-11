import React from "react";
import Style from "../styles/DescriptionStyle";

function Description({
  theme,
  children,
  subDescription,
  color,
  noMargin = false,
}) {
  return (
    <div>
      <Style.Container noMargin={noMargin}>
        <Style.Dot color={color} />
        <Style.Description>{children}</Style.Description>
      </Style.Container>
      {subDescription ? (
        <Style.SubDescription>{subDescription}</Style.SubDescription>
      ) : null}
    </div>
  );
}
export default Description;
