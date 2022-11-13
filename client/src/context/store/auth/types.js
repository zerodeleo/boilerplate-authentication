const types = {};
['signIn', 'signUp', 'logoutUser', 'deleteUser', 'editUser', 'editUserImage']
  .forEach((d, i) => {
    (i + 1 % 1 || i === 0) && Object.assign(types, { [`${d}Success`]: `${d}Success` })
    i + 1 % 2 && Object.assign(types, { [`${d}Loading`]: `${d}Loading` })
    i + 1 % 3 && Object.assign(types, { [`${d}Error`]: `${d}Error` })
  });

export default types;
