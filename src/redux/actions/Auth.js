import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

export function loginHandler(data) {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_PENDING",
    });
    axios
      .post(`${BASE_URL}/auth/login`, data)
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          payload: err,
        });
      });
  };
}

export function signupHandler(data) {
  return (dispatch) => {
    dispatch({
      type: "SIGNUP_PENDING",
    });
    axios
      .post(`${BASE_URL}/auth/register`, data)
      .then((res) => {
        dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "SIGNUP_ERROR",
          payload: err,
        });
      });
  };
}

export function resetHandler(data) {
  return (dispatch) => {
    dispatch({
      type: "RESET_PENDING",
    });
    axios
      .post(`${BASE_URL}/auth/reset`, data)
      .then((res) => {
        dispatch({ type: "RESET_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "RESET_ERROR",
          payload: err,
        });
      });
  };
}

export function logoutHandler() {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
}
