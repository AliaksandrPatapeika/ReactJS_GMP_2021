import {filter, includes} from 'lodash';

import noImage from '../img/no-image.png';

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
