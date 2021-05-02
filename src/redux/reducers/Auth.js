const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  isLoggedIn: false,
  result: {},
  user: {},
  error: {},
};

export let loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        isPending: true,
      };
    }
    case "LOGIN_ERROR": {
      return {
        ...state,
        isPending: false,
        isFulfilled: false,
        isRejected: true,
        error: payload,
      };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        isLoggedIn: true,
        user: payload,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        isLoggedIn: false,
        user: {},
      };
    }
    default:
      return state;
  }
};
export let signupReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SIGNUP_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        error: payload,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        result: payload,
      };

    default:
      return state;
  }
};
