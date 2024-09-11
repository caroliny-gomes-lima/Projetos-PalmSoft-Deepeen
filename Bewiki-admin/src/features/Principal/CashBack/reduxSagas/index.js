import { createReducers } from "../../../../store/helpers";
import AddCashback from "./AddCashback";
import CashBackListRequest from "./CashBackListRequest";
import DeleteCashback from "./DeleteCashback";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "CashBackListRequest",
      params: ["page", "sort", "pageSize", "sectorId"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        cashBackListData: null,
      }),
      sagaFunction: CashBackListRequest,
    },

    {
      name: "CashBackListRequestSuccess",
      params: ["data"],
      function: (state, { data }) => {
        return {
          ...state,
          isFetching: false,
          cashBackListData: data,
        };
      },
    },

    {
      name: "DeleteCashback",
      params: ["UserId", "cashBackValue", "reloadTable"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: DeleteCashback,
    },

    {
      name: "AddCashback",
      params: ["UserId", "cashBackValue", "reloadTable"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: AddCashback,
    },

    {
      name: "CashBackListRequestFinish",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "CashBackListRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    cashBackListData: null,
  }
);

export { Creators, reducers, sagas };
