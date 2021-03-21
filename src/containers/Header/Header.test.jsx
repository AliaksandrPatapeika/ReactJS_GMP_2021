import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import Header from './Header';

describe('Header', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeModalWindow: false,
        activeMovieDetails: false
      }
    };
    const store = mockStore(initialState);
    const header = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      .toJSON();

    expect(header).toMatchSnapshot();
  });
});
