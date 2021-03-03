import '../less/containers/MovieCardMenu.less';

import PropTypes from 'prop-types';
import React from 'react';

const MovieCardMenu = ({toggleMenu}) => (
  <div className="movieCardMenuContainer">
    <button type="button" className="menuItem closeButton" onClick={toggleMenu}>&#x2715;</button>
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
