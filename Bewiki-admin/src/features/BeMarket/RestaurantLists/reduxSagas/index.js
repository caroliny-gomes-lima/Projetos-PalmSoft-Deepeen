import createReducers from "../../../../store/helpers/createPageReducer";
import LogoMerchantsRequest from "./LogoMerchantsRequest";
import MerchantsListRequest from "./MerchantsListRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "MerchantsListRequest",
      params: ["page", "sort", "pageSize"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        merchantsListData: null,
      }),
      sagaFunction: MerchantsListRequest,
    },

    {
      name: "MerchantsListRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        merchantsListData: data,
      }),
    },

    {
      name: "LogoMerchantsRequest",
      params: ["imageId"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: LogoMerchantsRequest,
    },

    {
      name: "LogoMerchantsRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        LogoMerchantsPictureData: data,
      }),
    },

    {
      name: "MerchantsListRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    merchantsListData: null,
    LogoMerchantsPictureData: null,
  }
);

export { Creators, reducers, sagas };
