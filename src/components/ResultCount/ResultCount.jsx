import './ResultCount.less';

import PropTypes from 'prop-types';
import React from 'react';

const ResultCount = ({count}) => (
  <div className="resultCountContainer">
    <span className="resultCount">
      {count}
      {' '}
    </span>
    <span>movies found</span>
  </div>
);

ResultCount.propTypes = {
  count: PropTypes.number
};

ResultCount.defaultProps = {
  count: 0
};

export default ResultCount;
