import React from 'react';
import renderer from 'react-test-renderer';

import MovieContext from '../../../../context';
import AddMovie from './AddMovie';

describe('AddMovie', () => {
  test('renders correctly', () => {
    const addMovie = renderer
      .create(
        <MovieContext.Provider value={{
				  activeModalWindow: 'addMovie'
        }}
        >
          <AddMovie formTitle="title" />
        </MovieContext.Provider>
      )
      .toJSON();

    expect(addMovie).toMatchSnapshot();
  });
});
