import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import ResultsSort from './ResultsSort';

describe('ResultsSort', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      query: {
        activeFilter: 'ALL',
        sortBy: 'release_date',
        sortOrder: 'desc'
      }
    };
    const store = mockStore(initialState);
    const resultsSort = renderer
      .create(
        <Provider store={store}>
          <ResultsSort />
        </Provider>
      )
      .toJSON();

    expect(resultsSort).toMatchSnapshot();
  });
});
