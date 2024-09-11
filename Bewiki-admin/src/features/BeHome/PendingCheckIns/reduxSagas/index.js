import createReducers from "../../../../store/helpers/createPageReducer";
import CustomerDetailsRequest from "./CustomerDetailsRequest";
import PendingCheckInsRequest from "./PendingCheckInsRequest";
import CustomerDetailsDocumentPictureRequest from "./CustomerDetailsDocumentPictureRequest";
import CancelCheckInRequest from "./CancelCheckInRequest";
import ApproveCheckInRequest from "./ApproveCheckInRequest";
import CategoryDataRequest from "./CategoryDataRequest";
import AvailableStaysRequest from "./AvailableStaysRequest";
import TransferCheckInRequest from "./TransferCheckInRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "PendingCheckInsRequest",
      params: ["page", "sort", "pageSize", "staySubscriptionType"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: PendingCheckInsRequest,
    },

    {
      name: "PendingCheckInsRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        pendingCheckInsData: data,
      }),
    },

    {
      name: "PendingCheckInsRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "CustomerDetailsRequest",
      params: ["checkInId"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: CustomerDetailsRequest,
    },

    {
      name: "CustomerDetailsRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        customerDetailsData: data,
      }),
    },

    {
      name: "CustomerDetailsRequestFailure",
      function: (state) => ({
        ...state,
      }),
    },

    {
      name: "CustomerDetailsDocumentPictureRequest",
      params: ["imageIds"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: CustomerDetailsDocumentPictureRequest,
    },

    {
      name: "CustomerDetailsDocumentPictureRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        customerDetailsDocumentPictureData: data,
      }),
    },

    {
      name: "CustomerDetailsDocumentPictureRequestFailure",
      function: (state) => ({
        ...state,
      }),
    },

    {
      name: "CancelCheckInRequest",
      params: ["checkInId", "reloadTable"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: CancelCheckInRequest,
    },

    {
      name: "ApproveCheckInRequest",
      params: ["checkInId", "reloadTable"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: ApproveCheckInRequest,
    },

    {
      name: "CheckInRequestSuccess",
      function: (state) => ({
        ...state,

        isFetching: false,
      }),
    },
    {
      name: "TransferCheckInRequest",
      params: ["stayType", "subscriptionId", "stayId", "reloadTable"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: TransferCheckInRequest,
    },

    {
      name: "CategoryDataRequest",
      params: ["stayType"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: CategoryDataRequest,
    },

    {
      name: "CategoryDataRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        categoryData: data,
      }),
    },

    {
      name: "CategoryDataRequestFailure",
      params: ["data"],
      function: (state, data) => ({
        ...state,
        categoryData: null,
      }),
    },

    {
      name: "AvailableStaysRequest",
      params: ["categoryId"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: AvailableStaysRequest,
    },

    {
      name: "AvailableStaysRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        availableStaysData: data,
      }),
    },

    {
      name: "AvailableStaysRequestFailure",
      params: ["data"],
      function: (state, data) => ({
        ...state,
        availableStaysData: null,
      }),
    },
  ],
  {
    isFetching: false,
    pendingCheckInsData: null,
    customerDetailsData: null,
    customerDetailsDocumentPictureData: null,
    categoryData: null,
    availableStaysData: null,
  }
);

export { Creators, reducers, sagas };
