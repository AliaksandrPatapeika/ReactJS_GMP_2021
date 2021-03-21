import './Main.less';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchMovies} from '../../actions/movies';
import MainContent from '../MainContent';
import NoMoviesFound from '../NoMoviesFound';

const Main = () => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      {!activeModalWindow && (
      <main className="mainContainer">
        <MainContent />
        <NoMoviesFound />
      </main>
      )}
    </>
  );
};

export default Main;
