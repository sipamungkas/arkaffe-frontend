import {
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_FULFILLED,
  LOGOUT,
} from "../actions/ActionTypes";

const initialState = {
  isPending: false,
  isRejected: false,
  isLoggedIn: false,
  user: {},
  error: {},
};

export let loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_PENDING: {
      return {
        ...state,
        isPending: true,
      };
    }
    case LOGIN_REJECTED: {
      return {
        ...state,
        isPending: false,
        isLoggedIn: false,
        isRejected: true,
        error: payload,
      };
    }
    case LOGIN_FULFILLED: {
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isLoggedIn: true,
        user: payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    }
    default:
      return state;
  }
};
