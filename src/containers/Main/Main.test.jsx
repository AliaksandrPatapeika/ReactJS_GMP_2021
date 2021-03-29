import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import Main from './Main';

describe('Main', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        isLoading: true,
        movies: MockMovies,
        totalAmount: 6
      },
      query: {
        activeFilter: 'ALL',
        sortBy: 'release_date',
        sortOrder: 'desc'
      }
    };
    const store = mockStore(initialState);
    const main = renderer
      .create(
        <Provider store={store}>
          <Main />
        </Provider>
      )
      .toJSON();

    expect(main).toMatchSnapshot();
  });
});
