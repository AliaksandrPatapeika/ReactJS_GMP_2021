import * as actions from '../actions/actionTypes';

const initialState = {
  activeModalMovie: null,
  activeModalWindow: false,
  activeMovieDetails: false,
  activeMovieDetailsMovie: null,
  errorMessage: '',
  isLoading: false,
  movies: [],
  totalAmount: null
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case actions.CATCH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actions.CLOSE_MODAL:
      return {
        ...state,
        activeModalWindow: false,
        activeModalMovie: null
      };
    case actions.CLOSE_MOVIE_DETAILS:
      return {
        ...state,
        activeMovieDetails: false,
        activeMovieDetailsMovie: null
      };
    case actions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data,
        totalAmount: action.payload.totalAmount
      };
    case actions.SHOW_MODAL:
      return {
        ...state,
        activeModalWindow: action.payload.activeModalWindow,
        activeModalMovie: action.payload.activeModalMovie
      };
    case actions.SHOW_MOVIE_DETAILS:
      return {
        ...state,
        activeMovieDetails: true,
        activeMovieDetailsMovie: action.payload
      };
    case actions.START_ASYNC_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

export default movie;
