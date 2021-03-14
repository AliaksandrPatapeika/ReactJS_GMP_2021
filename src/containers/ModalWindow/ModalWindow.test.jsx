import React from 'react';
import renderer from 'react-test-renderer';

import MovieContext from '../../context';
import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
  test('renders correctly', () => {
    const modalWindow = renderer
      .create(
        <MovieContext.Provider value={{
				  activeModalWindow: 'addMovie'
        }}
        >
          <ModalWindow />
        </MovieContext.Provider>
      )
      .toJSON();

    expect(modalWindow).toMatchSnapshot();
  });
});
