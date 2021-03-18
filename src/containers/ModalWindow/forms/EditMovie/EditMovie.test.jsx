import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MovieContext from '../../../../context';
import {MockMovies} from '../../../../tests/mocks/mockData';
import EditMovie from './EditMovie';

describe('EditMovie', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const editMovie = renderer
      .create(
        <MovieContext.Provider value={{
				  activeModalWindow: 'editMovie'
        }}
        >
          <EditMovie formTitle="title" movie={mockMovie} />
        </MovieContext.Provider>
      )
      .toJSON();

    expect(editMovie).toMatchSnapshot();
  });
});
