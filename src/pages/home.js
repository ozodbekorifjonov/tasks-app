import React from 'react';
import { Link } from 'react-router-dom';
import CenterBox from '../components/CenterBox';

const Home = () => {
  return (
    <CenterBox>
      <ul>
        <li>
          <Link to={'/task-1'}>Task 1</Link>
        </li>
        <li>
          <Link to={'/task-2'}>Task 2</Link>
        </li>
      </ul>
    </CenterBox>
  );
};

export default Home;
