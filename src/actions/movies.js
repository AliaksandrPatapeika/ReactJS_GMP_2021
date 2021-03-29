import 'regenerator-runtime/runtime';

import * as actions from './actionTypes';

export const catchError = (error) => ({
  type: actions.CATCH_ERROR,
  payload: error
});

export const closeModal = () => ({
  type: actions.CLOSE_MODAL
});

export const closeMovieDetails = () => ({
  type: actions.CLOSE_MOVIE_DETAILS
});

export const fetchMoviesSuccess = (movies) => ({
  type: actions.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const setActiveFilter = (genre) => ({
  type: actions.SET_ACTIVE_FILTER,
  payload: genre
});

export const setSortBy = (value) => ({
  type: actions.SET_SORT_BY,
  payload: value
});

export const setSortOrder = (value) => ({
  type: actions.SET_SORT_ORDER,
  payload: value
});

export const showModal = (activeModalWindow, activeModalMovie) => ({
  type: actions.SHOW_MODAL,
  payload: {activeModalWindow, activeModalMovie}
});

export const showMovieDetails = (movie) => ({
  type: actions.SHOW_MOVIE_DETAILS,
  payload: movie
});

export const startAsyncRequest = () => ({
  type: actions.START_ASYNC_REQUEST
});
