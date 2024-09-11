import createReducers from "../../../../store/helpers/createPageReducer";
import BehomeStudioRequest from "./BehomeStudioRequest";
import PostReservation from "./PostReservation";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "PostReservation",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: PostReservation,
    },

    {
      name: "PostReservationFinish",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "PostReservationFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },

    {
      name: "BehomeStudioRequest",
      params: ["stayType"],
      function: (state, { data }) => ({
        ...state,
        isFetching: true,
        StudioData: null,
      }),
      sagaFunction: BehomeStudioRequest,
    },

    {
      name: "BehomeStudioRequestSuccess",
      params: ["data"],
      function: (state, { data }) => {
        return {
          ...state,
          isFetching: false,
          StudioData: data,
        };
      },
    },

    {
      name: "BehomeStudioRequestFailure",
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
  ],
  {
    isFetching: false,
    StudioData: [],
  }
);

export { Creators, reducers, sagas };
