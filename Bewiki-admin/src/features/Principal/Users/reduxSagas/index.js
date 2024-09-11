import createReducers from "../../../../store/helpers/createPageReducer";
import EnabledUsersRequest from "./EnabledUsersRequest";
import EnabledUsersDelete from "./EnabledUsersDelete";
import InfoCancellationRequest from "./InfoCancellationRequest";
import BlockedUsersRequest from "./BlockedUserRequest";
import EnabledUsersBlock from "./EnabledUsersBlock";
import UnblockBlockedUsers from "./UnblockBlockedUsers";
import BlackListUsersRequest from "./BlackListUsersRequest";
import BlackListUsersPost from "./BlackListUsersPost";
import CashbackTransactionsRequest from "./CashbackTransactionsRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "EnabledUsersRequest",
      params: ["page", "sort", "pageSize", "blocked"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        UsersData: null,
      }),
      sagaFunction: EnabledUsersRequest,
    },

    {
      name: "EnabledUsersRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        UsersData: data,
      }),
    },

    {
      name: "InfoCancellationRequest",
      params: ["userId"],
      function: (state, { data }) => ({
        ...state,
        InfoCancellationData: null,
      }),
      sagaFunction: InfoCancellationRequest,
    },

    {
      name: "InfoCancellationRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        InfoCancellationData: data,
      }),
    },

    {
      name: "EnabledUsersRequestFinish",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "EnabledUsersRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "EnabledUsersDelete",
      params: ["userId", "reloadCard"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: EnabledUsersDelete,
    },

    {
      name: "EnabledUsersBlock",
      params: ["userId"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: EnabledUsersBlock,
    },

    {
      name: "BlockedUsersRequest",
      params: ["page", "sort", "pageSize", "blocked"],
      function: (state, { data }) => ({
        ...state,
        isFetchingBlocked: true,
        UsersBlockedData: null,
      }),
      sagaFunction: BlockedUsersRequest,
    },

    {
      name: "BlockedUsersRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingBlocked: false,
        UsersBlockedData: data,
      }),
    },

    {
      name: "UnblockBlockedUsers",
      params: ["userId"],
      function: (state, { data }) => ({
        ...state,
        isFetchingBlocked: true,
      }),
      sagaFunction: UnblockBlockedUsers,
    },

    {
      name: "BlockedUsersFinish",
      function: (state) => ({
        ...state,
        isFetchingBlocked: false,
      }),
    },

    {
      name: "BlockedUsersFailure",
      function: (state) => ({
        ...state,
        isFetchingBlocked: false,
      }),
    },

    {
      name: "BlackListUsersRequest",
      params: ["page", "sort", "pageSize", "blocked"],
      function: (state, { data }) => ({
        ...state,
        isFetchingBlackList: true,
        BlackListData: null,
      }),
      sagaFunction: BlackListUsersRequest,
    },

    {
      name: "BlackListUsersRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingBlackList: false,
        BlackListData: data,
      }),
    },

    {
      name: "BlackListUsersRequestFinish",
      function: (state) => ({
        ...state,
        isFetchingBlackList: false,
      }),
    },

    {
      name: "BlackListUsersRequestFailure",
      function: (state) => ({
        ...state,
        isFetchingBlackList: false,
      }),
    },

    {
      name: "BlackListUsersPost",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingBlackList: true,
      }),
      sagaFunction: BlackListUsersPost,
    },

    // = = = = = = = = = = = = = = = = = = = = = = 

    {
      name: "CashbackTransactionsRequest",
      params: ["userId"],
      function: (state, { data }) => ({
        ...state,
        isFetchingCashbackTransactions: true,
        CashbackTransactionsData: null,
      }),
      sagaFunction: CashbackTransactionsRequest,
    },

    {
      name: "CashbackTransactionsRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingCashbackTransactions: false,
        CashbackTransactionsData: data,
      }),
    },

    {
      name: "CashbackTransactionsRequestFailure",
      function: (state) => ({
        ...state,
        isFetchingCashbackTransactions: false,
      }),
    },
  ],
  {
    isFetching: false,
    isFetchingBlocked: false,
    isFetchingBlackList: false,
    isFetchingCashbackTransactions: false,
    UsersData: null,
    InfoCancellationData: null,
    BlackListData: null,
    UsersBlockedData: null,
    CashbackTransactionsData: null,
  }
);

export { Creators, reducers, sagas };
