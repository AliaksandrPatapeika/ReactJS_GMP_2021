import React from 'react';
import renderer from 'react-test-renderer';

import ValidationErrorMessage from './ValidationErrorMessage';

describe('ValidationErrorMessage', () => {
  test('renders correctly', () => {
    const validationErrorMessage = renderer
      .create(
        <ValidationErrorMessage>
          Validation error message
        </ValidationErrorMessage>
      )
      .toJSON();

    expect(validationErrorMessage).toMatchSnapshot();
  });
});
