import {filter, includes} from 'lodash';

const getGenres = (Genres, movieGenres) => filter(
  Genres, ({label}) => includes(movieGenres, label)
);

export default getGenres;
