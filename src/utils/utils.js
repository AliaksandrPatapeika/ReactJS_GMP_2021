import {filter, includes} from 'lodash';

const getGenres = (Genres, movie) => filter(Genres, (genre) => includes(movie.genre.split(', '), genre.label));

export default {
  getGenres
};
