import React from 'react';
import styled from 'styled-components';
import redBall from '../assets/images/red-ball.png';
import purpleBall from '../assets/images/purple-ball.png';
import redBallSmall from '../assets/images/red-ball-small.png';

const ContainerFluid = styled.div`
  position: relative;
  background: #0e1014;
  height: 100vh;
  width: 100%;
`;

const RedLightBox = styled.div`
  position: absolute;
  width: 311px;
  height: 311px;
  left: -102px;
  top: 251px;
  background: #961a1a;
  opacity: 0.5;
  filter: blur(196px);
`;

const PurpleLight = styled.div`
  position: absolute;
  width: 259px;
  height: 259px;
  left: 602px;
  top: -154px;
  background: #833ab4;
  opacity: 0.5;
  filter: blur(196px);
`;

const RedBallBox = styled.img`
  position: absolute;
  left: 519px;
  top: 83px;
`;

const RedBallSmallBox = styled.img`
  position: absolute;
  left: 851px;
  top: 547px;
`;

const PurpleBallBox = styled.img`
  position: absolute;
  left: 868px;
  top: -2px;
`;

const Task2 = () => {
  return (
    <ContainerFluid>
      <RedLightBox />
      <PurpleLight />
      <RedBallBox src={redBall} alt={'red-ball'} />
      <PurpleBallBox src={purpleBall} alt={'purple-ball'} />
      <RedBallSmallBox src={redBallSmall} alt={'red-ball-small'} />
      <h1>Task 2</h1>
    </ContainerFluid>
  );
};

export default Task2;
