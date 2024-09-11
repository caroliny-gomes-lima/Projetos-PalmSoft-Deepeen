import React from "react";
import { Texts } from "../config";
import { Settings } from "../features";
import { SettingsStyles as Styles } from "./styles";
import { Content, BlockTitle } from "./styles/defaultStyles";

function UserRegister() {
  const texts = Texts["pt-BR"].settings;
  return (
    <Styles.Container>
      <Content $startCol={1} $endCol={12} $startRow={2} $endRow={5}>
        <BlockTitle>{texts.userSettings.userRegister.userRegister}</BlockTitle>
        <Settings.UserRegister />
      </Content>
    </Styles.Container>
  );
}

export default UserRegister;
