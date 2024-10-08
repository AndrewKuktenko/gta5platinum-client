import React, { useState, useEffect } from 'react';
import * as rpc from 'rage-rpc';

import {
  LoginForm,
  FormContainer,
  FormInput,
  ButtonItem,
} from '../styles';

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const onSuccessLogin = () => {
    console.log('sucsessfull login');
  };

  useEffect(() => {
    rpc.register('onSuccessLogin', onSuccessLogin); // get info from server
    return () => {
      rpc.unregister('onSuccessLogin');
    };
  }, []);

  const onSubmitLogin = () => {
    // eslint-disable-next-line no-undef
    mp.trigger('loginInformationToServer', name, password);
  };

  return (
    <FormContainer>
      <LoginForm>
        <FormInput
          type="text"
          name="name"
          placeholder="Логин"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormInput
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonItem
          type="primary"
          onClick={onSubmitLogin}
          style={{ width: '100%', marginTop: '20px' }}
        >
          Войти
        </ButtonItem>
      </LoginForm>
    </FormContainer>
  );
};
export default Login;
