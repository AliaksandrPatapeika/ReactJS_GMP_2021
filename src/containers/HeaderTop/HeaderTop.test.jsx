import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import HeaderTop from './HeaderTop';

describe('HeaderTop', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeMovieDetails: false
      }
    };
    const store = mockStore(initialState);
    const headerTop = renderer
      .create(
        <Provider store={store}>
          <HeaderTop />
        </Provider>
      )
      .toJSON();

    expect(headerTop).toMatchSnapshot();
  });
});
