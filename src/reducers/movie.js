import * as actions from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  movies: [],
  totalAmount: null,
  errorMessage: ''
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
    default:
      return state;
  }
};

export default movie;
