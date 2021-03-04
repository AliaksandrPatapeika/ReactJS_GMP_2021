import './Main.less';

import React from 'react';

import ResultCount from '../../components/ResultCount';
import {MockResultCount} from '../../mocks/mockData';
import Menu from '../Menu';
import MoviesList from '../MoviesList';

const Main = () => (
  <main className="mainContainer">
    <Menu />
    <ResultCount count={MockResultCount} />
    <MoviesList />
  </main>
);

export default Main;
