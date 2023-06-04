import * as authTypes from "../constants/authConstant";

const INITIAL_STATE_AUTH = {
  loading: false,
  token:null,
  user: null,
  isError: null,
};

export const authReducer = (state = INITIAL_STATE_AUTH, action) => {
  const { type, payload } = action;
  switch (type) {
    case authTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: null,
        token:payload
      };
    case authTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isError: payload,
      };
      case authTypes.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case authTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: null,
        token:payload
      };
    case authTypes.REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        isError: payload,
      };
      case authTypes.LOGOUT_USER:
        return {
          ...state,
          token:null,
          user:null,
        };
      case authTypes.SET_AUTH:
        return {
          ...state,
          loading: true,
        };
      case authTypes.SET_AUTH_SUCCESS:
        return {
          ...state,
          loading: false,
          isError: null,
          user: payload,
        };
      case authTypes.SET_AUTH_FAILED:
        return {
          ...state,
          loading: false,
          isError: payload,
        };
    default:
      return state;
  }
};
