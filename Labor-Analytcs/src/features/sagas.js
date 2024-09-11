import { sagas as globalSagas } from "./globalReduxSagas";
import { sagas as loginSagas } from "./login";
import { sagas as recoveryPasswordSagas } from "./forgotPassword";
import { sagas as productivitySagas } from "./productivity";
import { sagas as capacitySagas } from "./capacity";
import { sagas as costsSagas } from "./costs";
import { sagas as opportunitiesSagas } from "./opportunities";
import { sagas as settingsSagas } from "./settings";
import { sagas as setupSagas } from "./setup";
import { sagas as reportSagas } from "./reports";

const sagas = [
  ...globalSagas,
  ...loginSagas,
  ...recoveryPasswordSagas,
  ...productivitySagas,
  ...capacitySagas,
  ...costsSagas,
  ...opportunitiesSagas,
  ...settingsSagas,
  ...setupSagas,
  ...reportSagas,
];

export default sagas;
