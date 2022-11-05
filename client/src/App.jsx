import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Dash from './components/Dash';
import Footer from './components/layout/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const App = () => {
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

export default App;
