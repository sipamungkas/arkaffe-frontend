import {
  SET_PENDING,
  SET_ERROR,
  SET_USER,
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
    case SET_PENDING: {
      return {
        ...state,
        isPending: true,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isPending: false,
        isLoggedIn: false,
        isRejected: true,
        error: payload,
      };
    }
    case SET_USER: {
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
