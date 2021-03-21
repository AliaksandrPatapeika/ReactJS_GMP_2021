import * as actions from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  movies: [],
  totalAmount: null,
  errorMessage: '',
  activeMovieDetails: false,
  activeMovieDetailsMovie: null,
  activeModalWindow: false,
  activeModalMovie: null
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data,
        totalAmount: action.payload.totalAmount
      };
    case actions.FETCH_MOVIES_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message
      };
    case actions.SHOW_MOVIE_DETAILS:
      return {
        ...state,
        activeMovieDetails: true,
        activeMovieDetailsMovie: action.payload
      };
    case actions.CLOSE_MOVIE_DETAILS:
      return {
        ...state,
        activeMovieDetails: false,
        activeMovieDetailsMovie: null
      };
    case actions.SHOW_MODAL_WINDOW:
      return {
        ...state,
        activeModalWindow: action.payload.activeModalWindow,
        activeModalMovie: action.payload.activeModalMovie
      };
    case actions.CLOSE_MODAL_WINDOW:
      return {
        ...state,
        activeModalWindow: false,
        activeModalMovie: null
      };
    default:
      return state;
  }
};

export default movie;
