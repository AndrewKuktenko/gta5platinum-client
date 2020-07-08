import React from 'react';
import { Tabs } from 'antd';
import { Container } from './styles';
import Register from './register';
import Login from './login';

const { TabPane } = Tabs;

const Authorization = () => (
  <Container>
    <Tabs tabPosition="top">
      <TabPane tab="Login" key="login">
        <Login />
      </TabPane>
      <TabPane tab="Register" key="register">
        <Register />
      </TabPane>
    </Tabs>
  </Container>
);
export default Authorization;
