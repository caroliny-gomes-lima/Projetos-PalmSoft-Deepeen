import createReducers from "../../../store/helpers/createPageReducer";
import ConfirmPasswordResetRequest from "./ConfirmPasswordResetRequest";
import loginRequest from "./loginRequest";
import PasswordResetRequest from "./PasswordResetRequest";
import ValidateTokenRequest from "./ValidateTokenRequest";

const { Creators, reducers, sagas } = createReducers(
  [
    {
      name: "loginRequest",
      params: ["data"],
      function: (state) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: loginRequest,
    },
    {
      name: "loginSuccess",
      function: (state) => ({ ...state, isFetching: false }),
    },
    {
      name: "loginFailure",
      function: (state) => ({ ...state, isFetching: false }),
    },
    {
      name: "PasswordResetRequest",
      params: ["email", "goNext"],
      function: (state) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: PasswordResetRequest,
    },
    {
      name: "PasswordResetRequestFinished",
      params: ["email"],
      function: (state, { email }) => ({
        ...state,
        isFetching: false,
        email: email,
      }),
    },

    {
      name: "ValidateTokenRequest",
      params: ["email", "token", "goNext"],
      function: (state) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: ValidateTokenRequest,
    },
    {
      name: "ValidateTokenRequestFailed",
      function: (state) => ({ ...state, isFetching: false }),
    },
    {
      name: "ValidateTokenRequestSuccess",
      params: ["token"],
      function: (state, { token }) => ({
        ...state,
        isFetching: false,
        token: token,
      }),
    },

    {
      name: "ConfirmPasswordResetRequest",
      params: ["email", "password", "token", "finish"],
      function: (state) => ({
        ...state,
        isFetching: true,
      }),
      sagaFunction: ConfirmPasswordResetRequest,
    },
    {
      name: "ConfirmPasswordResetRequestSuccess",
      function: (state) => ({
        ...state,
        isFetching: false,
        email: null,
        token: null,
      }),
    },
    {
      name: "ConfirmPasswordResetRequestFailed",
      function: (state) => ({ ...state, isFetching: false }),
    },
  ],
  {
    isFetching: false,
    email: null,
    token: null,
  }
);

export { Creators, reducers, sagas };
