import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/login';
import { eventManagerSelector } from './data/selectors/eventManager';

function App() {
  const events = useSelector(eventManagerSelector);
  function trigger(eventName, args) {
    const handlers = events[eventName];
    handlers.forEach((handler) => handler(JSON.parse(args)));
  }

  useEffect(() => {
    window.trigger = trigger;
  }, []);
  return (<Login />);
}

export default App;
