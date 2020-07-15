import styled from 'styled-components';
import {
  Form,
  Input,
  Tabs,
  Button,
} from 'antd';
import bg from '../../assets/images/auth/bg.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  .ant-tabs {
    top: 28vh;
  }
  .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
    display: none !important;
  }

  .ant-tabs-bar {
    border: none;
  }

  .ant-tabs-tab[aria-selected="false"] {
    color: rgba(255,255,255, 0.3);
  }

  .ant-tabs-tab[aria-selected="false"]:hover {
    color: rgba(255,255,255, 0.7);
  }

  .ant-tabs-tab[aria-selected="true"] {
    color: rgba(255,255,255, 1);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Label = styled.div`
  margin: 10px 0 5px 0;
  text-align: left;
  .h2 {
    color: #fff;
  }
`;

export const LoginForm = styled(Form)`
    top: 33%;
    color: #fff;
    font-weight: 300;
    font-size: 15px;
    border: 1px solid #f5f5f5;
    background-color: #5b6467;
    background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%); 
    height: fit-content;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    background: transparent;
    border: none;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 600;
`;

export const ImgContainer = styled.div`
  background-image: url(${bg});
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const FormInput = styled(Input)`
  min-width: 300px;
  border-right-width: unset !important; 

  &:hover {
    border-right-width: unset !important;
    border-color: rgba(243, 232, 230, 0.3);
  }

  &:focus {
    border-right-width: unset !important;
    border: 4px solid transparent;
    box-shadow: 0 0px 9px white;
    color: #fff;
  }

  color: #fff;
  height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 450;
  position: relative;
  border: 4px solid transparent;
  border-radius: 35px;
  background: transparent;
  background-clip: padding-box;
  padding: 10px;
  box-shadow: 0 3px 9px black, inset 0 0 3px white;
  margin-bottom: 15px;

  &:after {
    position: absolute;
    top: -4px; bottom: -4px;
    left: -4px; right: -4px;
    content: '';
    z-index: -1;
    border-radius: 35px;
  }
`;

export const TabsItem = styled(Tabs)`
  color: #fff;
  font-size: 18px;
  font-weight: 300px;
  letter-spacing: 1px;
`;

export const ButtonItem = styled(Button)`
  min-width: 300px;

  color: rgba(0,0,0,0.8);
  height: 40px;
  text-align: center;
  font-size: 18px;
  position: relative;
  border-radius: 35px;
  padding: 2px;

  border-image-source: conic-gradient(from 0.5turn, #8e96a1, #cfdae8 0.12turn, #8e96a1 0.14turn, #8e96a1 0.5turn, #d5e0ee 0.61turn, #8e96a1 0.64turn, #8e96a1);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #dae1eb, #dae1eb), conic-gradient(from 0.5turn, #8e96a1, #cfdae8 0.12turn, #8e96a1 0.14turn, #8e96a1 0.5turn, #d5e0ee 0.61turn, #8e96a1 0.64turn, #8e96a1);
  background-origin: border-box;
  background-clip: content-box, border-box;

  &:hover {
    border-image-source: conic-gradient(from 0.5turn, #8e96a1, #cfdae8 0.12turn, #8e96a1 0.14turn, #8e96a1 0.5turn, #d5e0ee 0.61turn, #8e96a1 0.64turn, #8e96a1);
    border-image-slice: 1;
    background-image: linear-gradient(to bottom, #dae1eb, #dae1eb), conic-gradient(from 0.5turn, #8e96a1, #cfdae8 0.12turn, #8e96a1 0.14turn, #8e96a1 0.5turn, #d5e0ee 0.61turn, #8e96a1 0.64turn, #8e96a1);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: initial;
    box-shadow: 0 0 3px white;
  }

  transition: box-shadow 0.33s ease-in-out;

  &:focus {
    border-image-source: conic-gradient(from 0.5turn, #8e96a1, #cfdae8 0.12turn, #8e96a1 0.14turn, #8e96a1 0.5turn, #d5e0ee 0.61turn, #8e96a1 0.64turn, #8e96a1);
    border-image-slice: 1;
    background-image: linear-gradient(to bottom, #dae1eb, #dae1eb), conic-gradient(from 0.5turn, #8e96a1, #cfdae8 0.12turn, #8e96a1 0.14turn, #8e96a1 0.5turn, #d5e0ee 0.61turn, #8e96a1 0.64turn, #8e96a1);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: initial;
  }
`;

export const LogoImg = styled.img`
  height: 160px;
  object-fit: contain;
  position: fixed;
  top: 6vh;
`;
