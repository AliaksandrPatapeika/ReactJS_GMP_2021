import '../less/containers/MoviesList.less';

import React from 'react';

import {MockMovies} from '../mocks/mockData';
import MovieCard from './MovieCard';

const MoviesList = () => (
  <div className="moviesListContainer">
    {MockMovies.map((item) => (
      <MovieCard
        movie={item}
        key={item.id}
      />
    ))}
  </div>
);

export default MoviesList;
