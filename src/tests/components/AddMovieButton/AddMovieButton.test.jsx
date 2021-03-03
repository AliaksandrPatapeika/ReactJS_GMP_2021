import React from 'react';
import renderer from 'react-test-renderer';

import AddMovieButton from '../../../components/AddMovieButton';

describe('AddMovieButton', () => {
  test('renders correctly', () => {
    const addMovieButton = renderer
      .create(<AddMovieButton />)
      .toJSON();

    expect(addMovieButton).toMatchSnapshot();
  });
});
