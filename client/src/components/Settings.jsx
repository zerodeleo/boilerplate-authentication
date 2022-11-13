import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser, deleteUser } from '../redux/store/auth/actions.js';

// Context
import { AuthContext } from '../context/AuthContextProvider.jsx';
import { useContext } from 'react';
import { logoutUser, deleteUser } from '../context/store/auth/actions.js';

// Components
import Button from './layout/Button';
import IconBack from './icons/IconBack.jsx';
import IconDeleteUser from './icons/IconDeleteUser.jsx';

// Styles
import * as styles from '../style'

const Settings = () => {
  // const { uid } = useSelector(state => state.auth);
  // const dispatch = useDispatch();

  const { state: { uid }, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!uid) return <Navigate to="/signin" />;

  return (
    <article className={`${styles.container}`}>
      <Button
        className={`${styles.authSettingsBtn}`}
        onClick={() => dispatch(logoutUser())}
        txt='Log Out'/>
      <Button
        className={`${styles.authSettingsBtn}`} 
        txt={'Delete'}
        txtnextline={'Account'}
        onClick={() => dispatch(deleteUser({ uid }))}/>
      <Button
        txt="Back"
        className={`cursor-pointer ${styles.authSettingsBtn}`} 
        onClick={() => navigate('/')}/>
    </article>
  )
}

export default Settings
