import './Main.less';

import React, {useContext, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {fetchMovies} from '../../actions/movies';
import MovieContext from '../../context';
import MainContent from '../MainContent';
import NoMoviesFound from '../NoMoviesFound';

const Main = () => {
  const {activeModalWindow} = useContext(MovieContext);
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
