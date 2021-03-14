import './Main.less';

import React, {Suspense, useContext} from 'react';

import NoMoviesFound from '../../components/NoMoviesFound';
import ResultCount from '../../components/ResultCount';
import MovieContext from '../../context';
import {MockResultCount} from '../../mocks/mockData';
import Menu from '../Menu';

const MoviesList = React.lazy(() => import('../MoviesList'));

const Main = () => {
  const {activeModalWindow} = useContext(MovieContext);

  return (
    <>
      {!activeModalWindow && (
      <main className="mainContainer">
        <Menu />
        {MockResultCount ? (
          <>
            <ResultCount count={MockResultCount} />
            <Suspense fallback={<h3 className="loading">Loading... Please wait</h3>}>
              <MoviesList />
            </Suspense>
          </>
        ) : (
          <NoMoviesFound />
        )}
      </main>
      )}
    </>
  );
};

export default Main;
