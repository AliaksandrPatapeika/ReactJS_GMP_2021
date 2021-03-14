import {filter, includes} from 'lodash';

const getGenres = (Genres, movie) => {
  if (movie && movie.genre) {
    return filter(Genres, (genre) => includes(movie.genre.split(', '), genre.label));
  }

  return [];
};

export default getGenres;
