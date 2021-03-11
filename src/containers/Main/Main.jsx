import './Main.less';

import React, {Suspense} from 'react';

import ResultCount from '../../components/ResultCount';
import ModalWindowContext from '../../context';
import {MockResultCount} from '../../mocks/mockData';
import Menu from '../Menu';

const MoviesList = React.lazy(() => import('../MoviesList'));

const Main = () => (
  <ModalWindowContext.Consumer>
    {({activeModalWindow}) => (
      <main className={activeModalWindow ? 'mainContainer disabled' : 'mainContainer'}>
        <Menu />
        <ResultCount count={MockResultCount} />
        <Suspense fallback={<h3 className="loading">Loading... Please wait</h3>}>
          <MoviesList />
        </Suspense>
      </main>
    )}
  </ModalWindowContext.Consumer>
);

export default Main;
