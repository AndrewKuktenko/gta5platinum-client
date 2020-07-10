import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Icon,
  Input,
  Button,
} from 'antd';

import {
  Label,
  LoginForm,
  FormContainer,
  Title,
} from '../styles';
import { addHandler, removeHandler } from '../../../data/actions/eventManager';

const Login = ({
  history,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const onSuccessLogin = () => {
    history.push('/clear');
  };

  useEffect(() => {
    dispatch(addHandler({ eventName: 'onSuccessLogin', handler: onSuccessLogin }));
    return () => {
      dispatch(removeHandler({ eventName: 'onSuccessLogin', handler: onSuccessLogin }));
    };
  }, []);

  const onSubmitLogin = () => {
    // eslint-disable-next-line no-undef
    mp.trigger('loginInformationToServer', name, password);
  };

  return (
    <FormContainer>
      <LoginForm>
        <Title>Sign in your account</Title>
        <div>
          <Label> Username </Label>
          <Input
            type="text"
            name="name"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />

          <Label> Password </Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </div>
        <Button
          type="primary"
          style={{ width: '100%', marginTop: '20px' }}
          onClick={onSubmitLogin}
        >
          Sign in
        </Button>
      </LoginForm>
    </FormContainer>
  );
};
export default withRouter(Login);
