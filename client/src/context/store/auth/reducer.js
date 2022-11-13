import types from "./types";

const uid = JSON.parse(localStorage.getItem('uid'));

export const initialState = {
  uid: uid ? uid : null,
  username: '',
  bio: '',
  image: '',
  authSuccess: false,
  authLoading: false,
  authError: false,
};

const user = ({state, action: { payload: { data: { uid, username, bio, image } } }}) => {
  return {
  ...state,
  uid: uid ? uid : state.uid,
  username: username ? username : state.username,
  bio: bio ? bio : state.bio,
  image: image ? image : state.image,
  authSuccess: true,
  authLoading: false,
  authError: false,
}};
const loading = ({ state, action }) => {
  return {
  ...state,
  authSuccess: false,
  authLoading: false,
  authError: false,
}};
const err = ({ state, action }) => {
  return {
  ...state,
  authSuccess: false,
  authLoading: false,
  authError: action.err.response.data,
}};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case types.signInSuccess:
      return user({state, action});
    case types.signInLoading:
      return loading({state, action});
    case types.signInError:
      return err({state, action});
    case types.signUpSuccess:
      return user({state, action});
    case types.signUpLoading:
      return loading({state, action});
    case types.signUpError:
      return err({state, action});
    case types.editUserSuccess:
      return user({state, action});
    case types.editUserLoading:
      return loading({state, action});
    case types.editUserError:
      return err({state, action});
    case types.editUserImageSuccess:
      return user({state, action});
    case types.editUserImageLoading:
      return loading({state, action});
    case types.editUserImageError:
      return err({state, action});
    case types.logoutUserSuccess:
      return { ...initialState };
    case types.logoutUserLoading:
      return { ...initialState, authLoading: true, action };
    case types.logoutUserError:
      return { ...initialState, authError: true, action };
    case types.deleteUserSuccess:
      return { ...initialState };
    case types.deleteUserLoading:
      return { ...initialState, authLoading: true, action };
    case types.deleteUserError:
      return { ...initialState, authError: true, action };
    default:
      return state;
  }
}

export default authReducer;