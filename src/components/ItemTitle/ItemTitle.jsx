import './ItemTitle.less';

import PropTypes from 'prop-types';
import React from 'react';

const ItemTitle = ({name}) => <div className="itemTitle">{name}</div>;

ItemTitle.propTypes = {
  name: PropTypes.string.isRequired
};

export default ItemTitle;
