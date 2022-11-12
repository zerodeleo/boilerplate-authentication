import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../layout/Button';
import AuthInput from './AuthInput';

// Styles
import * as styles from '../../style'

const FormSignIn = ({ children, credentials, handleChange, handleSubmit }) => {
  const navigate = useNavigate();

  return (
    <form className={`${styles.authForm}`} onSubmit={handleSubmit}>
      <AuthInput 
        handleChange={handleChange}
        credentials={credentials}
        type="text"
        name="username"
        label="Username"
      />
      <AuthInput 
        handleChange={handleChange}
        credentials={credentials}
        type="password"
        name="password"
        label="Password"
      />
      <Button
        className={`${styles.authBtn}`}
        onSubmit={handleSubmit}
        txt="sign in"
        type="submit"
      />
      <Button
        className={`${styles.authNavBtn}`}
        onClick={() => navigate("/signup")}
        txt="Don't have an account yet?"
        type="button"
      />
  </form>
  )
}

export default FormSignIn;
