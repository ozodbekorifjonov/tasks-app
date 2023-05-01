import React from 'react';
import styled from 'styled-components';

const BtnBox = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #e4e5ea;
  cursor: pointer;
  padding: 21px 35px;
  border: none;
  outline: none;
  background-color: rgba(64, 119, 243, 1);
  transition: all linear 0.2s;

  &:hover {
    background-color: rgb(52, 106, 238);
  }
`;

const Button = ({ value, onClick }) => {
  return <BtnBox onClick={onClick}>{value}</BtnBox>;
};

export default Button;
