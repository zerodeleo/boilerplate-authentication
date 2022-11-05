import React from 'react';
import { Navigate } from 'react-router-dom';

// // Redux
import { useDispatch, useSelector } from 'react-redux';

// // Dispatches
import { logoutUser, deleteUser } from '../store/auth/actions.js';

const Dash = () => {
  const { uid, username } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (!uid) return <Navigate to="/signin" />;

  console.log('this is uid ' + uid)

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    name === 'logout' && dispatch(logoutUser());
    name === 'delete' && dispatch(deleteUser({ uid }));
  };

  return (
    <section className="Dash">
      <p className="text-2xl">Hello { username }</p>
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

export default Dash;
