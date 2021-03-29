import {filter, includes, map} from 'lodash';

import {URL} from '../constants/constants';
import noImage from '../img/noImage.png';

export const getGenres = (Genres, movieGenres) => filter(
  Genres, ({label}) => includes(movieGenres, label)
);

/* https://medium.com/@webcore1/react-fallback-for-broken-images-strategy-a8dfa9c1be1e */
export const addDefaultSrc = (event) => {
  // eslint-disable-next-line no-param-reassign
  event.target.src = noImage;
};

/* delay emulating a slow connection speed for spinner testing */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const convertMovieData = (movieData) => ({
  poster_path: movieData.poster_path ? movieData.poster_path : noImage,
  genres: map(movieData.genres, (movie) => movie.label),
  budget: Number(movieData.budget),
  revenue: Number(movieData.revenue),
  runtime: Number(movieData.runtime),
  vote_average: Number(movieData.vote_average),
  vote_count: Number(movieData.vote_count)
});

export const getQueryString = ({
  activeFilter, limit, sortBy, sortOrder
}) => `${URL}?filter=${activeFilter === 'ALL' ? '' : activeFilter}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

export const delimiteredCost = (value) => `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} $`;
