import './MovieCardMenu.less';

import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/Button';

const MovieCardMenu = ({toggleMenu}) => (
  <div className="movieCardMenuContainer">
    <Button className="menuItem closeButton" onClick={toggleMenu} title="&#x2715;" />
    <nav>
      <ul>
        <li role="menuitem" className="menuItem">Edit</li>
        <li role="menuitem" className="menuItem">Delete</li>
      </ul>
    </nav>
  </div>
);

MovieCardMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default MovieCardMenu;
