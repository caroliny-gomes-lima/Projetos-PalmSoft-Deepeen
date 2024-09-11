import createReducers from "../../../store/helpers/createPageReducer";
import changePasswordRequest from "./changePasswordRequest";
import userRegisterRequest from "./userRegisterRequest";
import getUsersRequest from "./getUsersRequest";
import updateUserRequest from "./updateUserRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "changePasswordRequest",
      params: ["data"],
      function: (state) => ({
        ...state,
        isFetchingChangePassword: true,
      }),
      sagaFunction: changePasswordRequest,
    },
    {
      name: "changePasswordSuccess",
      function: (state) => ({ ...state, isFetchingChangePassword: false }),
    },
    {
      name: "changePasswordFailure",
      function: (state) => ({ ...state, isFetchingChangePassword: false }),
    },
    {
      name: "userRegisterRequest",
      params: ["data"],
      function: (state) => ({
        ...state,
        isFetchingUserRegister: true,
      }),
      sagaFunction: userRegisterRequest,
    },
    {
      name: "userRegisterSuccess",
      function: (state) => ({ ...state, isFetchingUserRegister: false }),
    },
    {
      name: "userRegisterFailure",
      function: (state) => ({ ...state, isFetchingUserRegister: false }),
    },
    {
      name: "getUsersRequest",
      function: (state) => ({
        ...state,
        isFetchingGetUsers: true,
      }),
      sagaFunction: getUsersRequest,
    },
    {
      name: "getUsersSuccess",
      params: ["data"],
      function: (state, { data }) => ({
        ...state,
        isFetchingGetUsers: false,
        GetUsersData: data,
      }),
    },
    {
      name: "getUsersFailure",
      function: (state) => ({ ...state, isFetchingGetUsers: false }),
    },
    {
      name: "updateUserRequest",
      params: ["data"],
      function: (state) => ({
        ...state,
        isFetchingGetUsers: true,
      }),
      sagaFunction: updateUserRequest,
    },
  ],
  {
    isFetchingChangePassword: false,
    isFetchingUserRegister: false,
    isFetchingGetUsers: false,
    GetUsersData: [],
  }
);

export { Creators, reducers, sagas };
