export const addHandler = ({ eventName, handler }) => (dispatch) => {
  dispatch({
    type: 'ADD_HANDLER',
    data: {
      eventName,
      handler,
    },
  });
};

export const removeHandler = ({ eventName, handler }) => (dispatch) => {
  dispatch({
    type: 'REMOVE_HANDLER',
    data: {
      eventName,
      handler,
    },
  });
};
