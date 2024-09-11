import createReducers from "../../../../store/helpers/createPageReducer";
import ReservationsStayTransfer from "./ReservationsStayTransfer";
import RequestedReservationsAccept from "./ReservationsStayAccept";
import RequestedReservationsCancell from "./ReservationsStayCancel";
import ReservationsRequest from "./ReservationsRequest";
import BeHomeStayRoomRequest from "./BeHomeStayRoomRequest";
import BeHomeStayCategoryRequest from "./BeHomeStayCategoryRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "ReservationsRequest",
      params: ["page", "sort", "pageSize", "staySubscriptionType"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        requestedReservationsData: null,
      }),
      sagaFunction: ReservationsRequest,
    },

    {
      name: "ReservationsRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: false,
        requestedReservationsData: data,
      }),
    },

    {
      name: "BeHomeStayRoomRequest",
      params: ["categoryId"],
      function: (state) => ({
        ...state,
      }),
      sagaFunction: BeHomeStayRoomRequest,
    },

    {
      name: "BeHomeStayRoomSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        StayRoomData: data,
      }),
    },

    {
      name: "BeHomeStayCategoryRequest",
      params: ["stayType"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: BeHomeStayCategoryRequest,
    },

    {
      name: "BeHomeStayCategoryRequestSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        StayCategorytData: data,
      }),
    },

    {
      name: "ReservationsStayTransfer",
      params: ["stayType", "StaySubscriptionId", "BehomeStayId", "reloadTable"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: ReservationsStayTransfer,
    },

    {
      name: "RequestedReservationsAccept",
      params: ["stayType", "StaySubscriptionId", "reloadTable"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: RequestedReservationsAccept,
    },

    {
      name: "RequestedReservationsCancell",
      params: ["stayType", "StaySubscriptionId", "reloadTable", "data"],
      function: (state, { data }) => ({
        ...state,
      }),
      sagaFunction: RequestedReservationsCancell,
    },

    {
      name: "ReservationsSuccess",
      function: (state) => ({
        ...state,
      }),
    },

    {
      name: "ReservationsFailure",
      function: (state) => ({
        ...state,
      }),
    },
  ],
  {
    isFetching: false,
    StayCategorytData: [],
    StayRoomData: [],
    requestedReservationsData: null,
  }
);

export { Creators, reducers, sagas };
