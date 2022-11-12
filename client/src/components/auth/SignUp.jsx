import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Components
import Error from '../error/Error';
import FormSignUp from './FormSignUp';

// Dispatches
import { signUp } from '../../store/auth/actions';

// Styles
import * as styles from '../../style'

function SignUp() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    passwordRepeat: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const { 
    uid,
    authError
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authError) setError(authError)
  },[authError]);
  
  if (uid) return <Navigate to="/" />;

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    credentials.password === credentials.passwordRepeat && dispatch(signUp(credentials));
    setError("Passwords don't match");
  };

  return (
    <section className={`${styles.authFormContainer}`}>
      <FormSignUp 
      credentials={credentials}
      handleChange={handleChange}
      handleSubmit={handleSubmit} />
      { error ? <Error msg={authError ? authError : error} /> : null }
    </section>
  );
}

export default SignUp;
