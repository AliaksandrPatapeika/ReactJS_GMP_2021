import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import {MockMovies} from '../../tests/mocks/mockData';
import MainContent from './MainContent';

describe('MainContent', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        isLoading: true,
        movies: MockMovies,
        totalAmount: 6
      }
    };
    const store = mockStore(initialState);
    const mainContent = renderer
      .create(
        <Provider store={store}>
          <MainContent />
        </Provider>
      )
      .toJSON();

    expect(mainContent).toMatchSnapshot();
  });
});
