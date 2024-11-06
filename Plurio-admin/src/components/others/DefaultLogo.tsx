import React from "react";
import styled from "styled-components";
import { SVG } from "../../config";

const LogoContainer = styled.div(({ maxWidth }) => {
  return {
    width: maxWidth,
    height: "fit-content",
    flexShrink: 0,
  };
});

type DefaultLogoProps = {
  white?: boolean;
  maxWidth?: number;
};

function DefaultLogo({ white, maxWidth }: DefaultLogoProps) {
  return (
    <LogoContainer maxWidth={maxWidth}>
      {white ? (
        <SVG.PlurioLogo
          style={{
            width: "100%",
            height: "fit-content"
          }}
        />
      ) : (
        <SVG.PlurioLogo
          style={{
            width: "100%",
            height: "fit-content"
          }}
        />
      )}
    </LogoContainer>
  );
}

export default DefaultLogo;
