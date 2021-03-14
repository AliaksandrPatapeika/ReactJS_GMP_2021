import './ItemReleaseDate.less';

import PropTypes from 'prop-types';
import React from 'react';

const ItemReleaseDate = ({year}) => <div className="itemReleaseDate">{year}</div>;

ItemReleaseDate.propTypes = {
  year: PropTypes.number.isRequired
};

export default ItemReleaseDate;
