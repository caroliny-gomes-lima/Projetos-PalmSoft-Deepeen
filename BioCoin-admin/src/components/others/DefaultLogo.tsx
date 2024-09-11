import React from "react";
import styled from "styled-components";
import { SVG, Theme } from "../../config";

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});
const LogoContainer = styled.div(({ maxWidth = 150 }) => {
  return {
    width: "fit-content",
    height: maxWidth * 1.2,
    flexShrink: 0,
  };
});

type DefaultLogoProps = {
  maxWidth?: number;
  BlackLogo?: boolean;
  WhiteLogo?: boolean;
};

function DefaultLogo({ maxWidth, BlackLogo, WhiteLogo }: DefaultLogoProps) {
  return (
    <Container>
      <LogoContainer maxWidth={maxWidth}>
        {WhiteLogo ? (
          <SVG.WhiteLogo
            style={{
              marginTop: "7px",
              width: "180px",
              height: "45px",
            }}
          />
        ) : BlackLogo ? (
          <SVG.BlackLogo
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
            }}
          />
        ) : (
          <SVG.Colorfullogo
            style={{
              width: "100%",
              height: "auto",
              alignSelf: "center",
              [Theme.Light.breakpoints.down("md")]: {
                width: "180px",
                height: "45px",
              },
            }}
          />
        )}
      </LogoContainer>
      {/* <SubLogo>{texts.admin}</SubLogo> */}
    </Container>
  );
}

export default DefaultLogo;
