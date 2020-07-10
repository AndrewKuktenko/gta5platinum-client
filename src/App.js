import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { eventManagerSelector } from './data/selectors/eventManager';

import Authorization from './pages/authorization';
import CharacterSelector from './pages/characterSelector';

function App() {
  const events = useSelector(eventManagerSelector);
  function trigger(eventName, args) {
    const handlers = events[eventName];
    handlers.forEach((handler) => handler(args));
  }

  useEffect(() => {
    window.trigger = trigger;
  }, []);

  const Clear = () => (
    <p />
  );

  return (
    <Router>
      <>
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth" component={Authorization} />
        <Route path="/clear" component={Clear} />
        <Route path="/characterSelector" component={CharacterSelector} />
      </>
    </Router>
  );
}

export default App;
