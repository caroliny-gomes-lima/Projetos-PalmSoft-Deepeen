import { sagas as globalSagas } from "./globalReduxSagas";
//import { sagas as behomeSagas } from "./BeHome/BehomeReduxSagas";
import { sagas as loginSagas } from "./login";
import { sagas as BeHomeRequestedReservations } from "./BeHome/RequestedReservations";
import { sagas as behomeRegister } from "./BeHome/RegisterApartment";
import { sagas as beHomePendingCheckIns } from "./BeHome/PendingCheckIns";
import { sagas as BehomeSubscriptions } from "./BeHome/Signatures";
import { sagas as BehomePrevisionFlow } from "./BeHome/PrevisionFlow";
import { sagas as BehomeStudiosListSagas } from "./BeHome/StudiosList";
import { sagas as BehomeImportReservations } from "./BeHome/ImportReservations";
import { sagas as BeMarketCouponListSagas } from "./BeMarket/CouponList";
import { sagas as BeMarketRestaurantListsSagas } from "./BeMarket/RestaurantLists";
import { sagas as UsersSagas } from "./Principal/Users";
import { sagas as CashBackSagas } from "./Principal/CashBack";
const sagas = [
  ...globalSagas,
  //...behomeSagas,
  ...loginSagas,
  ...UsersSagas,
  ...CashBackSagas,
  ...BeHomeRequestedReservations,
  ...behomeRegister,
  ...beHomePendingCheckIns,
  ...BehomeSubscriptions,
  ...BehomePrevisionFlow,
  ...BehomeStudiosListSagas,
  ...BehomeImportReservations,
  ...BeMarketCouponListSagas,
  ...BeMarketRestaurantListsSagas,
];

export default sagas;
