import React from "react";
import styled from "styled-components";
import { Logos, MediaQueries } from "../../config";
import { IconButton } from "@material-ui/core";
import { navigateTo } from "../../navigation/navigate";

const LogoContainer = styled.div((props) => {
  const smWidth = 130;
  const normalWidth = 160;
  return {
    width: normalWidth,
    height: normalWidth / 2.5,
    flexShrink: 0,
    [MediaQueries.smDown]: { width: smWidth, height: smWidth / 2.5 },
  };
});

const Logo = styled(Logos.LogoSrc)((props) => ({
  width: "100%",
  height: "100%",
  alignSelf: "center",
}));

function DefaultLogo() {
  return (
    <LogoContainer>
      <IconButton onClick={() => navigateTo.Home()}>
        <Logo />
      </IconButton>
    </LogoContainer>
  );
}

export default DefaultLogo;
