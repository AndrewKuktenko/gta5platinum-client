import React, { useEffect } from 'react';

import { Container } from './styles';

const Login = () => {
  useEffect(() => {

  }, []);

  const click = () => {

  };

  return (
    <Container className="app">
      <h1>Make UI on React!</h1>
      <p className="current-time">HELLO</p>
      <p className="message">WORLD</p>
      <button type="button" className="send-button" onClick={() => click()}>Send</button>
    </Container>
  );
};
export default Login;
