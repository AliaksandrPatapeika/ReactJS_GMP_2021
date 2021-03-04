import './FilterItem.less';

import PropTypes from 'prop-types';
import React from 'react';

const FilterItem = ({name, isActive, setFilterId}) => {
  const className = isActive ? 'filterItem active' : 'filterItem';

  return (
    <li role="menuitem" tabIndex="0" className={className} onClick={setFilterId} onKeyPress={setFilterId}>
      {name}
    </li>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setFilterId: PropTypes.func.isRequired
};

export default FilterItem;
