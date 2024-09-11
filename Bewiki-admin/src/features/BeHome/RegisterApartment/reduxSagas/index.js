import { createReducers } from "../../../../store/helpers";
import RegisterApartmentRequestPost from "./RegisterApartmentRequestPost";
import BeHomeLocationRequest from "./BeHomeLocationRequest";
import BeHomeAmenityRequest from "./BeHomeAmenityRequest";
import BeHomeOnDemandRequest from "./getOnDemandRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "BeHomeOnDemandRequest",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingOnDemand: true,
      }),
      sagaFunction: BeHomeOnDemandRequest,
    },

    {
      name: "BeHomeOnDemandRequestSuccess",
      params: ["data"],
      function: (state, { data }) => {
        return {
          ...state,
          isFetchingOnDemand: false,
          OnDemandData: data,
        };
      },
    },

    {
      name: "BeHomeOnDemandRequestFailure",
      function: (state) => ({
        ...state,
        isFetchingOnDemand: false,
      }),
    },
    {
      name: "BeHomeLocationRequest",
      params: ["data"],
      function: (state) => ({
        ...state,
        isFetchingLocalization: true,
      }),
      sagaFunction: BeHomeLocationRequest,
    },

    {
      name: "BeHomeLocationRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingLocalization: false,
        LocalizationData: data,
      }),
    },
    {
      name: "BeHomeLocationRequestFailure",
      function: (state) => ({
        ...state,
        isFetchingLocalization: false,
      }),
    },

    {
      name: "BeHomeAmenityRequest",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingAmenity: true,
      }),
      sagaFunction: BeHomeAmenityRequest,
    },

    {
      name: "BeHomeAmenityRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingAmenity: false,
        AmenityApartmentData: data,
      }),
    },

    {
      name: "BeHomeAmenityRequestFailure",
      function: (state) => ({
        ...state,
        isFetchingAmenity: false,
      }),
    },
    {
      name: "RegisterApartmentRequestPost",
      params: ["data", "listOnDemand", "listAmenities"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: RegisterApartmentRequestPost,
    },

    {
      name: "RegisterApartmentRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        RegisterApartmentData: data,
      }),
    },

    {
      name: "RegisterApartmentRequestFinish",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "RegisterApartmentRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    isFetchingLocalization: false,
    isFetchingAmenity: false,
    isFetchingOnDemand: false,
    RegisterApartmentData: null,
    LocalizationData: [],
    AmenityApartmentData: null,
    OnDemandData: [],
  }
);

export { Creators, reducers, sagas };
