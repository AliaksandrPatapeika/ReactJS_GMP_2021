import './MovieCardMenu.less';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/Button';

const MovieCardMenu = ({closeSubMenu, showEditWindow, showDeleteWindow}) => (
  <ClickAwayListener onClickAway={closeSubMenu}>
    <div className="movieCardMenuContainer">
      <Button className="closeButton" onClick={closeSubMenu}>
        <i className="fa fa-times" aria-hidden="true" />
      </Button>
      <nav>
        <ul>
          <li
            role="menuitem"
            tabIndex="0"
            className="menuItem"
            onClick={showEditWindow}
            onKeyPress={showEditWindow}
          >
            Edit
          </li>
          <li
            role="menuitem"
            tabIndex="0"
            className="menuItem"
            onClick={showDeleteWindow}
            onKeyPress={showDeleteWindow}
          >
            Delete
          </li>
        </ul>
      </nav>
    </div>
  </ClickAwayListener>
);

MovieCardMenu.propTypes = {
  closeSubMenu: PropTypes.func.isRequired,
  showEditWindow: PropTypes.func.isRequired,
  showDeleteWindow: PropTypes.func.isRequired
};

export default MovieCardMenu;
