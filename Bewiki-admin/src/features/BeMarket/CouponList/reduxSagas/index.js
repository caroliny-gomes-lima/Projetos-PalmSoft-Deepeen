import createReducers from "../../../../store/helpers/createPageReducer";
import CouponGetRedeemersRequest from "./CouponGetRedeemersRequest";
import CouponListGetRequest from "./CouponListGetRequest";
import CouponRegisterCPFRequest from "./CouponRegisterCPFRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "CouponListGetRequest",
      params: ["page", "size"],
      function: (state) => ({
        ...state,
        isFetchingCouponList: true,
        couponListData: null,
      }),
      sagaFunction: CouponListGetRequest,
    },

    {
      name: "CouponListGetRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingCouponList: false,
        couponListData: data,
      }),
    },

    {
      name: "CouponListGetRequestFailure",
      function: (state) => ({
        ...state,
        isFetchingCouponList: false,
        couponListData: null,
      }),
    },

    {
      name: "CouponRegisterCpfRequest",
      params: ["id", "cpf", "showSuccessModal"],
      function: (state) => ({
        ...state,
        sendingCouponRegisterRequest: true,
      }),
      sagaFunction: CouponRegisterCPFRequest,
    },

    {
      name: "CouponRegisterCpfRequestFinished",
      function: (state) => ({
        ...state,
        sendingCouponRegisterRequest: false,
      }),
    },

    {
      name: "CouponGetRedeemersRequest",
      params: ["couponId"],
      function: (state) => ({
        ...state,
        isFetchingCouponRedeemers: true,
        couponRedeemersListData: null,
      }),
      sagaFunction: CouponGetRedeemersRequest,
    },

    {
      name: "CouponGetRedeemersRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingCouponRedeemers: false,
        couponRedeemersListData: data,
      }),
    },

    {
      name: "CouponGetRedeemersRequestFailure",
      function: (state) => ({
        ...state,
        isFetchingCouponRedeemers: false,
        couponRedeemersListData: null,
      }),
    },
  ],
  {
    isFetchingCouponList: false,
    isFetchingCouponRedeemers: false,
    sendingCouponRegisterRequest: false,
    couponListData: null,
    couponRedeemersListData: null,
  }
);

export { Creators, reducers, sagas };
