import '../less/components/ThreeDotsIcon.less';

import PropTypes from 'prop-types';
import React from 'react';

import threeDotsIconLink from '../img/moreButton.svg';

const ThreeDotsIcon = ({toggleMenu}) => (
  <button type="button" className="threeDotsIcon" onClick={toggleMenu}>
    <img
      src={threeDotsIconLink}
      alt="MovieButton"
    />
  </button>
);

ThreeDotsIcon.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default ThreeDotsIcon;
