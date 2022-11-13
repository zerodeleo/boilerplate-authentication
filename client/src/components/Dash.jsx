import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// Components
import UploadProfileImage from './UploadProfileImage';
import Bio from './Bio';
import Welcome from './Welcome';
import Button from './layout/Button';

// Redux
import { useSelector } from 'react-redux';

// Styles
import * as styles from '../style'

const Dash = () => {
  const { uid } = useSelector(state => state.auth);
  const navigate = useNavigate();

  if (!uid) return <Navigate to="/signin" />;

  return (
    <section className={`${styles.container}`}>
      <Welcome/>
      <UploadProfileImage/>
      <Bio/>
      <Button
        txt='settings'
        onClick={() => navigate('/settings')}/>
    </section>
  );
};

export default Dash;
