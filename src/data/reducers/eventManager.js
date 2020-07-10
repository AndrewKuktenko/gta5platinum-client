import events from '../modules/playerEvents';

const initialState = {
  events,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HANDLER': {
      const { data } = action;
      const { eventName, handler } = data;
      if (eventName in state.events) {
        state.events[eventName].push(handler);
      } else {
        state.events[eventName] = [handler];
      }
      return {
        ...state,
      };
    }
    case 'REMOVE_HANDLER': {
      const { data } = action;
      const { eventName, handler } = data;
      if (eventName in state.events) {
        const index = state.events[eventName].indexOf(handler);
        state.events[eventName].splice(index, 1);
      }
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
