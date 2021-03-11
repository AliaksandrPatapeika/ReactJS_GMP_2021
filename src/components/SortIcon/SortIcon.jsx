import PropTypes from 'prop-types';
import React from 'react';

const SortIcon = ({sortOrderAsc}) => (
  <>
    {sortOrderAsc
		  ? <i className="fa fa-sort-amount-asc" aria-hidden="true" />
		  : <i className="fa fa-sort-amount-desc" aria-hidden="true" />}
  </>
);

SortIcon.propTypes = {
  sortOrderAsc: PropTypes.bool.isRequired
};

export default SortIcon;
