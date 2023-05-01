import React from 'react';
import styled from 'styled-components';
import redBall from '../assets/images/red-ball.png';
import purpleBall from '../assets/images/purple-ball.png';
import redBallSmall from '../assets/images/red-ball-small.png';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContainerFluid = styled.div`
  position: relative;
  background: #0e1014;
  width: 100%;
  height: calc(100% - 100px);
  color: #e4e5ea;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    width: auto;
    overflow: hidden;
  }
`;

const Container = styled.div`
  padding: 57px 0 20px 0;
  margin: 0 auto;
  position: relative;
  width: 1088px;
  height: calc(100% - 100px);

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    width: 100%;
    padding: 0;
  }
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

  -webkit-animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    width: 211px;
    height: 210px;
    left: -55px;
    top: 241px;

    background: #961a1a;
    opacity: 0.5;
    filter: blur(196px);
  }
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

  -webkit-animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    width: 259px;
    height: 259px;
    left: 258px;
    top: 107px;

    background: #833ab4;
    opacity: 0.5;
    filter: blur(196px);
  }
`;

const RedBallBox = styled.img`
  position: absolute;
  left: 519px;
  top: 83px;

  -webkit-animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    width: 43px;
    height: 43px;
    left: 29px;
    top: 460px;
    filter: blur(5px);
    backdrop-filter: blur(2px);
  }
`;

const RedBallSmallBox = styled.img`
  position: absolute;
  left: 851px;
  top: 547px;

  -webkit-animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const PurpleBallBox = styled.img`
  position: absolute;
  left: 868px;
  top: -2px;

  -webkit-animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    width: 40px;
    height: 40px;
    left: 320px;
    top: 236px;
    filter: blur(5px);
    backdrop-filter: blur(2px);
  }
`;

const Task2 = () => {
  return (
    <ContainerFluid>
      <RedLightBox />
      <PurpleLight />
      <RedBallBox src={redBall} alt={'red-ball'} />
      <PurpleBallBox src={purpleBall} alt={'purple-ball'} />
      <RedBallSmallBox src={redBallSmall} alt={'red-ball-small'} />
      <Container>
        <Navbar />
        <Header />
        <Footer />
      </Container>
    </ContainerFluid>
  );
};

export default Task2;
