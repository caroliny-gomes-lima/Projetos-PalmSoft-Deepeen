import React from "react";
import Styles from "../styles/Styles";
import { DefaultLogo } from "../../../components";

function Footer() {
  return (
    <Styles.Container >
      <Styles.Content>
        <DefaultLogo maxWidth={50} WhiteLogo />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          <Styles.FooterText>{"Contato:" + " "}</Styles.FooterText>
          <Styles.FooterText $defaultFont>
            {"info@yoursite.io"}
          </Styles.FooterText>
        </div>
      </Styles.Content>
    </Styles.Container>
  );
}

export default Footer;
