import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Components
import Error from '../error/Error';
import FormSignIn from '../layout/FormSignIn';

// Dispatches
import { signIn } from '../../store/actions/authActions';

function SignIn({ signInDispatch, authError, auth }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);

  
  useEffect(() => {
    if (authError) setError(true)
  },[authError]);
  
  if (auth.uid) return <Navigate to="/" />;

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInDispatch(credentials);
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

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signInDispatch: (credentials) => dispatch(signIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
