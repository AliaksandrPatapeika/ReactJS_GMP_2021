import React from 'react';
import renderer from 'react-test-renderer';

import ThreeDotsIcon from '../../../components/ThreeDotsIcon';

describe('ThreeDotsIcon', () => {
  test('renders correctly', () => {
    const threeDotsIcon = renderer
      .create(<ThreeDotsIcon toggleMenu={Function} />)
      .toJSON();

    expect(threeDotsIcon).toMatchSnapshot();
  });
});
