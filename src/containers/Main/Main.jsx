import './Main.less';

import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {catchError, fetchMoviesSuccess, startAsyncRequest} from '../../actions/movies';
import ResultCount from '../../components/ResultCount';
import {getQueryString, sleep} from '../../utils';
import Menu from '../Menu';
import MoviesList from '../MoviesList';
import NoMoviesFound from '../NoMoviesFound';

const Main = () => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const totalAmount = useSelector((state) => state.movie.totalAmount);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        dispatch(startAsyncRequest());
        await sleep(700);
        const {data} = await axios.get(getQueryString(query));

        dispatch(fetchMoviesSuccess(data));
      } catch (error) {
        dispatch(catchError(error.message));
      }
    };

    fetchMovies();
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
