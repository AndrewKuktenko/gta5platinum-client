import React from 'react';
import { Tabs } from 'antd';
import {
  Container,
  ImgContainer,
  TabsItem,
  LogoImg,
} from './styles';
import Register from './register';
import Login from './login';
import logo from '../../assets/images/auth/Logo 1.png';

const { TabPane } = Tabs;

const Authorization = () => (
  <ImgContainer>
    <Container>
      <LogoImg src={logo} />
      <TabsItem tabPosition="bottom" tabBarGutter={100}>
        <TabPane tab="Авторизация" key="login">
          <Login />
        </TabPane>
        <TabPane tab="Регистрация" key="register">
          <Register />
        </TabPane>
      </TabsItem>
    </Container>
  </ImgContainer>
);
export default Authorization;
