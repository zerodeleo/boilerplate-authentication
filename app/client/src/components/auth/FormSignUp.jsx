import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../layout/Button';
import AuthInput from './AuthInput';

// Styles
import * as styles from '../../style'

const FormSignUp = ({ credentials, handleChange, handleSubmit }) => {
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
      <AuthInput 
        handleChange={handleChange}
        credentials={credentials}
        type="password"
        name="passwordRepeat"
        label="Repeat password"
      />
      <Button
        className={`${styles.authBtn}`}
        onSubmit={handleSubmit}
        txt="sign up"
        type="submit"
      />
      <Button
        className={`${styles.authNavBtn}`}
        onClick={() => navigate("/signin") }
        txt="Already have an account?"
        type="button"
      />
  </form>
  )
}

export default FormSignUp;
