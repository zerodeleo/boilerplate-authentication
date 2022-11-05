import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Components
import Error from '../error/Error';
import FormSignIn from '../layout/FormSignIn';

// Thunks
import { signIn } from '../../store/auth/actions'

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { 
    uid,
    authSuccess, 
    authLoading, 
    authError 
  } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (authError) setError(true)
  },[authError]);
  
  if (uid) return <Navigate to="/" />;

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(credentials));
  };

  return (
    <section className="Form__container">
          <FormSignIn 
            credentials={credentials}
            handleChange={handleChange}
            handleSubmit={handleSubmit} />
         { error ? <Error msg={authError} /> : null }
    </section>
  );
}

export default SignIn;
