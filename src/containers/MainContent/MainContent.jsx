import './MainContent.less';

import React from 'react';
import {useSelector} from 'react-redux';

import ResultCount from '../../components/ResultCount';
import Menu from '../Menu';
import MoviesList from '../MoviesList';

const MainContent = () => {
  const totalAmount = useSelector((state) => state.movie.totalAmount);
  const isLoading = useSelector((state) => state.movie.isLoading);

  return (
    <>
      {isLoading && (
      <h3 className="loadingMoviesList">Loading... Please wait</h3>
      )}
      {totalAmount > 0 && (
      <>
        <Menu />
        <ResultCount count={totalAmount} />
        <MoviesList />
      </>
      )}
    </>
  );
};

export default MainContent;
