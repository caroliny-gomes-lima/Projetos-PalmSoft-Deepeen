import { reducers as globalReducers } from "./globalReduxSagas";
//import { reducers as behomeReducers } from "./BeHome/BehomeReduxSagas";
import { reducers as loginReducers } from "./login";
import { reducers as BeHomeRequestedReservationsReducers } from "./BeHome/RequestedReservations";
import { reducers as beHomeRegisterReducers } from "./BeHome/RegisterApartment";
import { reducers as beHomePendingCheckInsReducers } from "./BeHome/PendingCheckIns";
import { reducers as BehomeSubscriptionsReducers } from "./BeHome/Signatures";
import { reducers as BehomePrevisionFlowReducers } from "./BeHome/PrevisionFlow";
import { reducers as BehomeStudiosListReducers } from "./BeHome/StudiosList";
import { reducers as BehomeReservationImportReducers } from "./BeHome/ImportReservations";
import { reducers as BeMarketCouponListReducers } from "./BeMarket/CouponList";
import { reducers as BeMarketRestaurantListsReducers } from "./BeMarket/RestaurantLists";
import { reducers as UsersReducers } from "./Principal/Users";
import { reducers as CashBackReducer } from "./Principal/CashBack";
const reducers = {
  global: globalReducers,
  //behome: behomeReducers,
  login: loginReducers,
  users: UsersReducers,
  CashBack: CashBackReducer,
  BeHomeRequestedReservations: BeHomeRequestedReservationsReducers,
  beHomeRegister: beHomeRegisterReducers,
  beHomePendingCheckIns: beHomePendingCheckInsReducers,
  BehomeSubscriptions: BehomeSubscriptionsReducers,
  behomePrevisionFlow: BehomePrevisionFlowReducers,
  behomeStudiosList: BehomeStudiosListReducers,
  BehomeReservationImport: BehomeReservationImportReducers,
  BeMarketCouponList: BeMarketCouponListReducers,
  BeMarketRestaurantLists: BeMarketRestaurantListsReducers,
};

export default reducers;
