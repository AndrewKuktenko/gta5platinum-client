export const signIn = (username, password) => (dispatch) => {
  dispatch({
    type: 'SIGN_IN',
    payload: {
      event: 'OnPlayerLoginAttempt',
      body: {
        username,
        password,
      },
    },
  });
};
