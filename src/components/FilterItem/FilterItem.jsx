import './FilterItem.less';

import PropTypes from 'prop-types';
import React, {useMemo} from 'react';

const FilterItem = ({name, isActive, setActiveFilterId}) => {
  const className = useMemo(() => (isActive ? 'filterItem active' : 'filterItem'), [isActive]);

  return (
    <li role="menuitem" tabIndex="0" className={className} onClick={setActiveFilterId} onKeyPress={setActiveFilterId}>
      {name}
    </li>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActiveFilterId: PropTypes.func.isRequired
};

export default FilterItem;
