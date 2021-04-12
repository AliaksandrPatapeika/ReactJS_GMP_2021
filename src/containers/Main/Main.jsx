import './Main.less';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

import {fetchMovies, setStateFromURL} from '../../actions/movies';
import {scrollToTop} from '../../utils';
import Menu from '../Menu';
import MoviesList from '../MoviesList';
import NoMoviesFound from '../NoMoviesFound';
import ResultCount from '../ResultCount';

const Main = () => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const search = useSelector((state) => state.query.search);
  const filter = useSelector((state) => state.query.filter);
  const sortBy = useSelector((state) => state.query.sortBy);
  const sortOrder = useSelector((state) => state.query.sortOrder);
  const limit = useSelector((state) => state.query.limit);
  const dispatch = useDispatch();
  const location = useLocation();
  const url = new URLSearchParams(location.search);

  useEffect(() => {
    dispatch(setStateFromURL(url));
    dispatch(fetchMovies());
    scrollToTop();
  }, [dispatch, search, filter, sortBy, sortOrder, limit, url]);

  return !activeModalWindow && (
  <main className="mainContainer">
    <Menu />
    <ResultCount />
    <MoviesList />
    <NoMoviesFound />
  </main>
  );
};

export default Main;
