import './MoviesList.less';

import React from 'react';

import {MockMovies} from '../../mocks/mockData';
import MovieCard from '../MovieCard';

const MoviesList = () => {
  const movies = MockMovies;

  return (
    <div className="moviesListContainer">
      {movies.map((item) => (
        <MovieCard
          movie={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default MoviesList;
