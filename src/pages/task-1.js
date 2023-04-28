import React from 'react';
import CenterBox from '../components/CenterBox';
import Timer from '../components/timer/Timer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  a {
    display: inline-block;
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

const Task1 = () => {
  return (
    <Container>
      <Link to={'/'}>Back</Link>
      <CenterBox>
        <h3>Task 1</h3>
        <Timer />
      </CenterBox>
    </Container>
  );
};

export default Task1;
