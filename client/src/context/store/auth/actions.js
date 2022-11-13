import axios from "axios";
import dispatches from "./types";

const file = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return formData;
}

export const signIn = ({ username, password }) => async dispatch => {
  dispatch({ type: dispatches.signInLoading });
  try {
    const payload = await axios.post('/api/authenticate/signin', { username, password });
    dispatch({ type: dispatches.signInSuccess, payload });
  } catch (err) {
    dispatch({ type: dispatches.signInError, err });
  }
};

export const signUp = ({ username, password }) => async dispatch => {
  dispatch({ type: dispatches.signUpLoading });
  try {
    const payload = await axios.post('/api/authenticate/signup', { username, password });
    dispatch({ type: dispatches.signUpSuccess, payload });
  } catch (err) {
    dispatch({ type: dispatches.signUpError, err });
  }
};

export const editUser = ({ uid, username, password, bio }) => async dispatch => {
  dispatch({ type: dispatches.editUserLoading });
  try {
    const payload = await axios.put(`/api/users/${uid}`, { username, password, bio });
    dispatch({ type: dispatches.editUserSuccess, payload });
  } catch (err) {
    dispatch({ type: dispatches.editUserError, err });
  }
};

export const editUserImage = ({ uid, image }) => async dispatch => {
  dispatch({ type: dispatches.editUserImageLoading });
  try {
    const payload = await axios.put(`/api/users/${uid}/image`, file(image));
    dispatch({ type: dispatches.editUserImageSuccess, payload });
  } catch (err) {
    dispatch({ type: dispatches.editUserImageError, err });
  }
};

export const deleteUser = ({ uid }) => async dispatch => {
  dispatch({ type: dispatches.deleteUserLoading });
  try {
    const payload = await axios.delete(`/api/users/${uid}`);
    dispatch({ type: dispatches.deleteUserSuccess, payload });
  } catch (err) {
    dispatch({ type: dispatches.deleteUserError, err });
  }
};

export const logoutUser = () => async dispatch => dispatch({ type: dispatches.logoutUserSuccess });
