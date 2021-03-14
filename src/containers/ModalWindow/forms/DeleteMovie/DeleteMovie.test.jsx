import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MovieContext from '../../../../context';
import {MockMovies} from '../../../../mocks/mockData';
import DeleteMovie from './DeleteMovie';

describe('DeleteMovie', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const deleteMovie = renderer
      .create(
        <MovieContext.Provider value={{
				  activeModalWindow: 'deleteMovie'
        }}
        >
          <DeleteMovie title="title" movie={mockMovie} />
        </MovieContext.Provider>
      )
      .toJSON();

    expect(deleteMovie).toMatchSnapshot();
  });
});
