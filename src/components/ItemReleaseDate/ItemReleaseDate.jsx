import './ItemReleaseDate.less';

import PropTypes from 'prop-types';
import React from 'react';

const ItemReleaseDate = ({releaseDate}) => <div className="itemReleaseDate">{releaseDate}</div>;

ItemReleaseDate.propTypes = {
  releaseDate: PropTypes.string.isRequired
};

export default ItemReleaseDate;
