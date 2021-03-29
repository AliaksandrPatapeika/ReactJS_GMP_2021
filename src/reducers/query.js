import * as actions from '../actions/actionTypes';

const initialState = {
  activeFilter: 'ALL',
  limit: 12,
  sortBy: 'release_date',
  sortOrder: 'desc'
};

const query = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload
      };
    case actions.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };
    case actions.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload === 'desc' ? 'asc' : 'desc'
      };
    default:
      return state;
  }
};

export default query;
