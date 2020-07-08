import styled from 'styled-components';
import { Form } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 290px;
  .ant-tabs {
    top: 18vh;
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
    top: 25%;
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
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 600;
`;
