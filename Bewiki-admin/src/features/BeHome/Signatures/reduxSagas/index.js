import createReducers from "../../../../store/helpers/createPageReducer";
import BehomeSubscriptionsGet from "./BehomeSubscriptionsGet";
import BeHomeTransactionGet from "./BeHomeTransactionGet";
import BeHomeSubscriptionsCancel from "./BeHomeSubscriptionsCancel";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "BehomeSubscriptionsGet",
      params: [
        "page",
        "sort",
        "pageSize",
        "staySubscriptionType",
        "minCheckOutDate",
        "maxCheckInDate",
      ],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        subscriptionsData: null,
      }),
      sagaFunction: BehomeSubscriptionsGet,
    },

    {
      name: "BehomeSubscriptionsSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        subscriptionsData: data,
      }),
    },

    {
      name: "BehomeSubscriptionsFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "BeHomeTransactionGet",
      params: ["StaySubscriptionId"],
      function: (state, { data }) => ({
        ...state,
        transactionData: null,
      }),
      sagaFunction: BeHomeTransactionGet,
    },

    {
      name: "BeHomeTransactionSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        transactionData: data,
        isFetching: false,
      }),
    },

    {
      name: "BeHomeTransactionFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "BeHomeSubscriptionsCancel",
      params: [
        "StaySubscriptionId",
        "cancelReason",
        "reloadTable",
        "showCancelSuccessModal",
      ],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: BeHomeSubscriptionsCancel,
    },
  ],
  {
    isFetching: false,
    subscriptionsData: null,
    transactionData: null,
  }
);

export { Creators, reducers, sagas };
