import React from "react";
import { Texts } from "../config";
import { Settings } from "../features";
import { SettingsStyles as Styles } from "./styles";
import { Content, BlockTitle } from "./styles/defaultStyles";

function ChangePassword() {
  const texts = Texts["pt-BR"].settings;
  return (
    <Styles.Container>
      <Content justifyGrid $startCol={1} $endCol={30} $startRow={2} $endRow={5}>
        <BlockTitle>{texts.changePassword.passwordChange}</BlockTitle>
        <Settings.ChangePassword />
      </Content>
    </Styles.Container>
  );
}

export default ChangePassword;
