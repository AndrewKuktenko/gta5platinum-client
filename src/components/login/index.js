import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHandler } from '../../data/actions/eventManager';

import { Container } from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const onMessage = ({ value }) => {
    setMessage(value);
  };

  useEffect(() => {
    dispatch(addHandler({ eventName: 'onMessage', handler: onMessage }));
  }, []);

  const click = () => {
    dispatch(addHandler({ eventName: 'event', handler: 'handler' }));
  };

  return (
    <Container className="app">
      <h1>{message}</h1>
      <p className="current-time">HELLO</p>
      <p className="message">WORLD</p>
      <button type="button" className="send-button" onClick={() => click()}>Send</button>
    </Container>
  );
};
export default Login;
