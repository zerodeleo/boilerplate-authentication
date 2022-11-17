import axios from "axios";
import types from "./types";

const file = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return formData;
}

export const signIn = ({ username, password }) => async dispatch => {
  dispatch({ type: types.signInLoading });
  try {
    const payload = await axios.post('/api/authenticate/signin', { username, password });
    dispatch({ type: types.signInSuccess, payload });
  } catch (err) {
    dispatch({ type: types.signInError, err });
  }
};

export const signUp = ({ username, password }) => async dispatch => {
  dispatch({ type: types.signUpLoading });
  try {
    const payload = await axios.post('/api/authenticate/signup', { username, password });
    dispatch({ type: types.signUpSuccess, payload });
  } catch (err) {
    dispatch({ type: types.signUpError, err });
  }
};

export const editUser = ({ uid, username, password, bio }) => async dispatch => {
  dispatch({ type: types.editUserLoading });
  try {
    const payload = await axios.put(`/api/users/${uid}`, { username, password, bio });
    dispatch({ type: types.editUserSuccess, payload });
  } catch (err) {
    dispatch({ type: types.editUserError, err });
  }
};

export const editUserImage = ({ uid, image }) => async dispatch => {
  dispatch({ type: types.editUserImageLoading });
  try {
    const payload = await axios.put(`/api/users/${uid}/image`, file(image));
    dispatch({ type: types.editUserImageSuccess, payload });
  } catch (err) {
    dispatch({ type: types.editUserImageError, err });
  }
};

export const deleteUser = ({ uid }) => async dispatch => {
  dispatch({ type: types.deleteUserLoading });
  try {
    const payload = await axios.delete(`/api/users/${uid}`);
    dispatch({ type: types.deleteUserSuccess, payload });
  } catch (err) {
    dispatch({ type: types.deleteUserError, err });
  }
};

export const logoutUser = () => async dispatch => dispatch({ type: types.logoutUserSuccess });
