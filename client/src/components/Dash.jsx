import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Context
import { AuthContext } from '../context/AuthContextProvider.jsx';
import { useContext } from 'react';

// Components
import Welcome from './Welcome';
import UploadProfileImage from './UploadProfileImage';
import Bio from './Bio';
import Button from './layout/Button.jsx';

// Styles
import * as styles from '../style'

const Dash = () => {
  const navigate = useNavigate();

  // const { uid } = useSelector(state => state.auth);
  
  const { state: { uid } } = useContext(AuthContext);

  if (!uid) return <Navigate to="/signin" />;

  return (
    <section className={`${styles.container}`}>
      <Welcome/>
      <UploadProfileImage/>
      <Bio/>
      <Button
        className={`${styles.hoverEffect} font-shrikhand text-tetrisYellow-100 w-1/6 md:w-1/12 cursor-pointer`}
        txt="Settings"
        onClick={() => navigate('/settings')}/>
    </section>
  );
};

export default Dash;
