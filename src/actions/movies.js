import 'regenerator-runtime/runtime';

import axios from 'axios';

import {sleep} from '../utils';
import * as actions from './actionTypes';

const url = 'http://localhost:4000/movies';

export const fetchMoviesRequest = () => ({
  type: actions.FETCH_MOVIES_REQUEST
});

export const fetchMoviesSuccess = (movies) => ({
  type: actions.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const fetchMoviesError = (error) => ({
  type: actions.FETCH_MOVIES_ERROR,
  payload: error
});

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesRequest());
    await sleep(2000);
    const {data} = await axios.get(`${url}?limit=6`);

    dispatch(fetchMoviesSuccess(data));
  } catch (error) {
    dispatch(fetchMoviesError(error));
  }
};
