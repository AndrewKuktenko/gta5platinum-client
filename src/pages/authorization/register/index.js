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
import { addHandler } from '../../../data/actions/eventManager';

const Registration = ({
  history,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const onSuccessRegistration = () => {
    history.push('/clear');
  };

  useEffect(() => {
    dispatch(addHandler({ eventName: 'onSuccessRegistration', handler: onSuccessRegistration }));
  }, []);

  const onSubmitRegister = () => {
    // eslint-disable-next-line no-undef
    mp.trigger('registerInformationToServer', email, name, password);
  };

  return (
    <FormContainer>
      <LoginForm>
        <Title>Register</Title>
        <div>
          <Label> Email </Label>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />

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
          onClick={onSubmitRegister}
        >
          Register
        </Button>
      </LoginForm>
    </FormContainer>
  );
};
export default withRouter(Registration);
