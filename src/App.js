import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Authorization from './pages/authorization';
import CharacterSelector from './pages/characterSelector';

function App() {
  const Clear = () => (
    <p />
  );

  return (
    <Router>
      <>
        <Route path="/auth" component={Authorization} />
        <Route path="/clear" component={Clear} />
        <Route path="/characterSelector" component={CharacterSelector} />
      </>
    </Router>
  );
}

export default App;
