import React from 'react';
import { Navigate } from 'react-router-dom';

// Components
import Button from './layout/Button';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Dispatches
import { logoutUser, deleteUser } from '../store/auth/actions.js';

// Styles
import * as styles from '../style'

const Dash = () => {
  const { uid, username } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (!uid) return <Navigate to="/signin" />;

  console.log('this is uid ' + uid)

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    name === 'logout' && dispatch(logoutUser());
    name === 'delete' && dispatch(deleteUser({ uid }));
  };

  return (
    <section className={`${styles.container}`}>
      <article className={`${styles.container}`}>
        <h1 className={`${styles.h2}`}>Hello</h1> 
        <h2 className={`${styles.h1}`}>{ username }</h2>
      </article>
      <article className={`${styles.authBtnContainer}`}>
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
          txtNextLine={`Account`}/>
      </article>
    </section>
  );
};

export default Dash;
