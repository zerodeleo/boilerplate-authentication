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
