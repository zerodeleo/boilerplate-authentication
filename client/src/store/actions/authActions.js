import axios from 'axios';
import * as types from '../types';

export const signInWithLocalStorage = () => (dispatch) => {
  const uid = JSON.parse(localStorage.getItem('uid'));
  if (uid) {
    axios.get(`/api/users/${uid}`)
        .then((res) => dispatch({ type: types.SIGNIN_USER_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: types.SIGNIN_USER_ERROR, err: err.response.data }));
  }
};

export const signIn = (credentials) => (dispatch) => {
  const { username, password } = credentials;

  axios.post(`/api/users/signin`, { username, password })
      .then((res) => {
        localStorage.setItem('uid', JSON.stringify(res.data.uid));
        return res;
      })
      .then((res) => dispatch({ type: types.SIGNIN_USER_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: types.SIGNIN_USER_ERROR, err: err.response.data }));
};

export const signUp = (credentials) => (dispatch) => {
  const { username, password } = credentials;
  axios.post(`/api/users/signup`, { username, password })
      .then((res) => {
        localStorage.setItem('uid', JSON.stringify(res.data.uid));
        return res;
      })
      .then((res) => dispatch({ type: types.SIGNUP_USER_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: types.SIGNUP_USER_ERROR, err: err.response.data }));
  return;
};

export const editUser = (user) => (dispatch) => {
  const { uid, username, password } = user;

  axios.put(`/api/users/${uid}`, { username, password })
      .then((res) => dispatch({ type: types.EDIT_USER_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: types.EDIT_USER_ERROR, err: err.response.data }));
};

export const deleteUser = (uid) => (dispatch) => {
  axios.delete(`/api/users/${uid}`)
      .then((res) => {
        localStorage.clear();
        dispatch({ type: types.DELETE_USER_SUCCESS });
      })
      .catch((err) => dispatch({ type: types.DELETE_USER_ERROR, err: err.response.data }));
};

export const logoutUser = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: types.LOGOUT_USER_SUCCESS });
};
