import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
import Dash from './components/Dash';
import Footer from './components/layout/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

// Dispatches
import { signInWithLocalStorage } from './store/actions/authActions';

const App = ({ signInWithLocalStorageDispatch }) => {

  useEffect(() => {
    // When app loads, it looks in local storage if a uid is saved, if it is, it signs in the user
    signInWithLocalStorageDispatch()
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithLocalStorageDispatch: () => dispatch(signInWithLocalStorage()),  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
