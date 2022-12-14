import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Dash from './components/Dash';
import Footer from './components/layout/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

// Styles
import * as styles from './style'
import Settings from './components/Settings';

const App = () => {
    return (
      <main className={`${styles.bg} ${styles.gridCenterScreen}`}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Dash />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Footer />
        </Router>
      </main>
  );
}

export default App;
