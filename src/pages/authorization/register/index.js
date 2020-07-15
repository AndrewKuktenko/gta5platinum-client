import React, { useState, useEffect } from 'react';
import * as rpc from 'rage-rpc';
import {
  LoginForm,
  FormContainer,
  FormInput,
  ButtonItem,
} from '../styles';

const Registration = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const onSuccessRegistration = (result) => {
    console.log('result', result);
  };

  useEffect(() => {
    rpc.register('onSuccessRegistration', onSuccessRegistration); // get info from server
    return () => {
      rpc.unregister('onSuccessRegistration');
    };
  }, []);

  const onSubmitRegister = () => {
    // eslint-disable-next-line no-undef
    mp.trigger('registerInformationToServer', email, name, password); // send data to server
  };

  return (
    <FormContainer>
      <LoginForm>
        <FormInput
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          type="text"
          name="name"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonItem
          type="primary"
          style={{ width: '100%', marginTop: '20px' }}
          onClick={onSubmitRegister}
        >
          Register
        </ButtonItem>
      </LoginForm>
    </FormContainer>
  );
};
export default Registration;
