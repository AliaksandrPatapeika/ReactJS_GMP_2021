import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import ResultsSort from './ResultsSort';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({id: '123'}),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe('ResultsSort', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      query: {
        filter: '',
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
