import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import ResultsFilter from './ResultsFilter';

describe('ResultsFilter', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      query: {
        activeFilter: 'ALL'
      }
    };
    const store = mockStore(initialState);
    const resultsFilter = renderer
      .create(
        <Provider store={store}>
          <ResultsFilter />
        </Provider>
      )
      .toJSON();

    expect(resultsFilter).toMatchSnapshot();
  });
});
