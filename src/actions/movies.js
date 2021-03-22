import 'regenerator-runtime/runtime';

import axios from 'axios';

import {sleep} from '../utils';
import * as actions from './actionTypes';

const url = 'http://localhost:4000/movies';

export const startAsyncRequest = () => ({
  type: actions.START_ASYNC_REQUEST
});

export const fetchMoviesSuccess = (movies) => ({
  type: actions.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const catchError = (error) => ({
  type: actions.CATCH_ERROR,
  payload: error
});

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(startAsyncRequest());
    await sleep(2000);
    const {data} = await axios.get(`${url}?limit=6`);

    dispatch(fetchMoviesSuccess(data));
  } catch (error) {
    dispatch(catchError(error.message));
  }
};

export const addMovie = (movie) => async (dispatch) => {
  try {
    await axios.post(url, movie);
  } catch (error) {
    dispatch(catchError(error.message));
  }
};

export const editMovie = (movie) => async (dispatch) => {
  try {
    await axios.put(url, movie);
  } catch (error) {
    dispatch(catchError(error.message));
  }
};

export const deleteMovie = (movieId) => async (dispatch) => {
  try {
    await axios.delete(`${url}/${movieId}`);
  } catch (error) {
    dispatch(catchError(error.message));
  }
};

export const showMovieDetails = (movie) => ({
  type: actions.SHOW_MOVIE_DETAILS,
  payload: movie
});

export const closeMovieDetails = () => ({
  type: actions.CLOSE_MOVIE_DETAILS
});

export const showModal = (activeModalWindow, activeModalMovie) => ({
  type: actions.SHOW_MODAL,
  payload: {activeModalWindow, activeModalMovie}
});

export const closeModal = () => ({
  type: actions.CLOSE_MODAL
});
