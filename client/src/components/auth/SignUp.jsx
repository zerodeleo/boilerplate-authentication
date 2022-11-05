import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Components
import Error from '../error/Error';
import FormSignUp from '../layout/FormSignUp';

// Dispatches
import { signUp } from '../../store/auth/actions';

function SignUp() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { 
    uid,
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
    dispatch(signUp(credentials));
  };

  return (
    <section className="Form__container">
          <FormSignUp 
            credentials={credentials}
            handleChange={handleChange}
            handleSubmit={handleSubmit} />
         { error ? <Error msg={authError} /> : null }
    </section>
  );
}

export default SignUp;
