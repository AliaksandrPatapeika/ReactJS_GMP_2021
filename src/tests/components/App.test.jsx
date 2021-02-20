import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../components/App';

describe('App', () => {
  test('renders correctly', () => {
    const app = renderer
      .create(<App />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
