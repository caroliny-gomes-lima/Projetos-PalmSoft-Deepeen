import { Divider } from "@material-ui/core";
import React from "react";
import { Texts } from "../../../config";
import { navigateTo } from "../../../navigation/navigate";

import Styles from "../styles/userSettingsMenu";

function Login(props) {
  const texts = Texts["pt-BR"].settings.userSettings;
  return (
    <Styles.Container>
      <Styles.MenuItem onClick={() => navigateTo["UserRegister"]()}>
        <Styles.MenuText>{texts.userRegister.userRegister}</Styles.MenuText>
        <Divider />
      </Styles.MenuItem>

      <Styles.MenuItem onClick={() => navigateTo["UserList"]()}>
        <Styles.MenuText>{texts.UserList.UserList}</Styles.MenuText>
        <Divider />
      </Styles.MenuItem>
    </Styles.Container>
  );
}

export default React.memo(Login);
