import ChangePassword from "./changePassword/container";
import UserRegister from "./userRegister/container";
import UserList from "./userList/container";
import UserSettingsMenu from "./userSettingsMenu/container";
import { reducers, sagas } from "./reduxSagas";

const Settings = {
  ChangePassword,
  UserRegister,
  UserList,
  UserSettingsMenu,
};

export { reducers, sagas, Settings };
