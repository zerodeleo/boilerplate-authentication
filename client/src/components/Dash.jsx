import React from 'react';
import { Navigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Dispatches
import { logoutUser, deleteUser } from '../store/actions/authActions';

const Dash = ({ auth, deleteUserDispatch, logoutUserDispatch }) => {
  if (!auth.uid) return <Navigate to="/signin" />;

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    switch (name) {
      case 'logout':
        logoutUserDispatch();
        break;
      case 'delete':
        deleteUserDispatch(auth.uid);
        break;
      default:
        console.log('Nothing happened');
        break;
    }
  };

  return (
    <section className="Dash">
      <p className="text-2xl">Hello { auth.username }</p>
      <button 
        onClick={handleClick}
        name='logout'
      >
        Log Out
      </button>
      <button 
        onClick={handleClick}
        name='delete'
      >
        Delete
      </button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
  auth: state.auth,
}};

const mapDispatchToProps = (dispatch) => ({
  deleteUserDispatch: (uid) => dispatch(deleteUser(uid)),
  logoutUserDispatch: () => dispatch(logoutUser()),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
