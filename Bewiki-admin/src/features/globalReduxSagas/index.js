import { createReducers } from "../../store/helpers";
import logoutFunction from "./logoutFunction";
import getGlobalStatus from "./getGlobalStatus";
import getUserInfos from "./getUserInfos";
import getImage from "./getImage";
//import BeHomeOnDemandRequest from "./getOnDemandRequest";
import getStatesRequest from "./getStatesRequest";
import GetAddressRequest from "./GetAddressRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "globalLogout",
      function: (state) => ({
        ...state,
        userInfos: {},
      }),
      sagaFunction: logoutFunction,
    },

    {
      name: "getGlobalStatus",
      function: (state) => ({
        ...state,
      }),
      sagaFunction: getGlobalStatus,
    },

    {
      name: "setIsLoggedIn",
      params: ["isLoggedIn"],
      function: (state, { isLoggedIn }) => ({
        ...state,
        isLoggedIn,
      }),
    },

    {
      name: "getUserInfosRequest",
      function: (state) => ({
        ...state,
        isFetchingUserInfos: true,
      }),
      sagaFunction: getUserInfos,
    },
    {
      name: "getUserInfosSuccess",
      params: ["userInfos"],
      function: (state, { userInfos }) => ({
        ...state,
        userInfos,
        isFetchingUserInfos: false,
      }),
    },
    {
      name: "getUserInfosFailure",
      function: (state) => ({
        ...state,
      }),
    },
    {
      name: "getImage",
      params: ["idList"],
      function: (state) => ({
        ...state,
        isFetchingImages: true,
      }),
      sagaFunction: getImage,
    },

    {
      name: "getImageSuccess",
      params: ["data"],
      function: (state, { data }) => {
        return {
          ...state,
          images: data,
          isFetchingImages: false,
        };
      },
    },
    {
      name: "getImageFailure",
      function: (state) => ({
        ...state,
        isFetchingImages: false,
      }),
    },

    {
      name: "GetAddressRequest",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        AddressData: null,
      }),
      sagaFunction: GetAddressRequest,
    },

    {
      name: "GetAddressRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        AddressData: data,
      }),
    },

    {
      name: "GetAddressRequestFailure",
      function: (state) => ({
        ...state,
      }),
    },

    {
      name: "getStatesRequest",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        StatesData: null,
        isFetchingState: true,
      }),
      sagaFunction: getStatesRequest,
    },

    {
      name: "getStatesRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingState: false,
        StatesData: data,
      }),
    },

    {
      name: "getStatesRequestFailure",
      function: (state) => ({
        ...state,
        isFetchingState: false,
      }),
    },
  ],

  {
    isLoggedIn: false,
    isFetchingUserInfos: true,
    userInfos: {},
    images: [],
    isFetchingImages: false,
    StatesData: [],
    isFetchingState: false,
    AddressData: null,
  }
);

export { Creators, reducers, sagas };
