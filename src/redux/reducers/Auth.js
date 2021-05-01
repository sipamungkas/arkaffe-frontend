import {
  SET_PENDING,
  SET_ERROR,
  SET_SUCCESS,
  LOGOUT,
} from "../actions/ActionTypes";

const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  isLoggedIn:false,
  result: {},
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
        isFulfilled: false,
        isRejected: true,
        error: payload,
      };
    }
    case SET_SUCCESS: {
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
        isFulfilled: false,
        user: {},
      };
    }
    default:
      return state;
  }
};
export let signupReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_PENDING:
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isRejected: true,
        isPending: false,
        error: payload,
      };
    case SET_SUCCESS:
      return {
        ...state,
        isPending: false,
        isRejected:false,
        isFulfilled: true,
        result: payload,
      };

    default:
      return state;
  }
};
