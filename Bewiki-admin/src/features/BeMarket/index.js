import {
  CouponList,
  reducers as CouponListReducers,
  sagas as CouponListSagas,
} from "./CouponList";
import {
  RestaurantLists,
  reducers as RestaurantListsReducers,
  sagas as RestaurantListsSagas,
} from "./RestaurantLists";

const BeMarket = {
  CouponList,
  RestaurantLists,
};

const reducers = {
  CouponListReducers: CouponListReducers,
  RestaurantListsReducers: RestaurantListsReducers,
};

const sagas = [...CouponListSagas, ...RestaurantListsSagas];

export { reducers, sagas, BeMarket };
