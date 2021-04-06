import './Main.less';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchMovies} from '../../actions/movies';
import ResultCount from '../../components/ResultCount';
import Menu from '../Menu';
import MoviesList from '../MoviesList';
import NoMoviesFound from '../NoMoviesFound';

const Main = () => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const totalAmount = useSelector((state) => state.movie.totalAmount);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, query]);

  return !activeModalWindow && (
    <main className="mainContainer">
      <Menu />
      <ResultCount count={totalAmount} />
      <MoviesList />
      <NoMoviesFound />
    </main>
  );
};

export default Main;
