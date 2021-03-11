import React from 'react';
import renderer from 'react-test-renderer';

import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
  test('renders correctly', () => {
    const modalWindow = renderer
      .create(<ModalWindow />)
      .toJSON();

    expect(modalWindow).toMatchSnapshot();
  });
});
