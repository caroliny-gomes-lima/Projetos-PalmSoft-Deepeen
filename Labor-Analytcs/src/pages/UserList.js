import React from "react";
import { Texts } from "../config";
import { Settings } from "../features";
import { SettingsStyles as Styles } from "./styles";
import { Content, BlockTitle } from "./styles/defaultStyles";

function UserList() {
  const texts = Texts["pt-BR"].settings;
  return (
    <Styles.Container>
      <Content $startCol={1} $endCol={12} $startRow={1} $endRow={30}>
        <BlockTitle>{texts.userSettings.UserList.UserList}</BlockTitle>
        <Settings.UserList />
      </Content>
    </Styles.Container>
  );
}

export default UserList;
