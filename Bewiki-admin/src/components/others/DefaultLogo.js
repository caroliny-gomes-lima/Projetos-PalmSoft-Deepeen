import React from "react";
import styled from "styled-components";
import { MediaQueries } from "../../config";

const LogoContainer = styled.div((props) => {
  const smWidth = 90;
  const normalWidth = 110;
  return {
    width: normalWidth,
    height: normalWidth / 2.5,
    flexShrink: 0,
    [MediaQueries.smDown]: { width: smWidth, height: smWidth / 2.5 },
  };
});

const Logo = styled.div((props) => ({
  width: "100%",
  height: "100%",
  alignSelf: "center",
}));

function DefaultLogo() {
  return (
    <LogoContainer>
      <Logo />
    </LogoContainer>
  );
}

export default DefaultLogo;
