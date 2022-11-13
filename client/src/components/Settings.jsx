import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser, deleteUser } from '../store/auth/actions.js';

// Context
import { AuthContext } from '../context/AuthContextProvider.jsx';
import { useContext } from 'react';
import { logoutUser, deleteUser } from '../context/store/auth/actions.js';

// Components
import Button from './layout/Button';

// Styles
import * as styles from '../style'

const Settings = () => {
  // const { uid } = useSelector(state => state.auth);
  // const dispatch = useDispatch();

  const { state: { uid }, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!uid) return <Navigate to="/signin" />;

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    name === 'logout' && dispatch(logoutUser());
    name === 'delete' && dispatch(deleteUser({ uid }));
  };

  return (
    <article className={`${styles.container}`}>
      <Button
        className={`${styles.authSettingsBtn}`}
        onClick={handleClick}
        name='logout'
        txt='Log Out'/>
      <Button
        className={`${styles.authSettingsBtn}`}
        onClick={handleClick}
        name='delete'
        txt={`Delete`}
        txtnextline={`Account`}/>
      <Button
        className={`${styles.authSettingsBtn}`}
        onClick={() => navigate('/')}
        txt={`home`}/>
    </article>
  )
}

export default Settings
