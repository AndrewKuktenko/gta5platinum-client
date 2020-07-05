export const addHandler = ({ eventName, handler }) => (dispatch) => {
  dispatch({
    type: 'ADD_HANDLER',
    data: {
      eventName,
      handler,
    },
  });
};
