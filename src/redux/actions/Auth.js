import axios from "axios";
import { SET_PENDING, SET_SUCCESS, SET_ERROR, LOGOUT } from "./ActionTypes";

const BASE_URL = "http://localhost:4000";

export function loginHandler(data) {
  return (dispatch) => {
    dispatch({
      type: SET_PENDING,
    });
    axios
      .post(`${BASE_URL}/auth/login`, data)
      .then((res) => {
        dispatch({ type: SET_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: err,
        });
      });
  };
}

export function signupHandler(data) {
  return (dispatch) => {
    dispatch({
      type: SET_PENDING,
    });
    axios
      .post(`${BASE_URL}/auth/register`, data)
      .then((res) => {
        dispatch({ type: SET_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: err,
        });
      });
  };
}

export function logoutHandler() {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
}
