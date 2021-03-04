import './ItemGenre.less';

import PropTypes from 'prop-types';
import React from 'react';

const ItemGenre = ({genre}) => <div className="itemGenre">{genre}</div>;

ItemGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default ItemGenre;
