export const validUsername = / /;
export const validPassword = / /;

export const validate = ({ name, value }) => {
  switch(name) {
    case 'username':
      return /[A-Za-z]$/.test(value);
    case 'password':
      return true;
    default:
      return true;
  }
};
