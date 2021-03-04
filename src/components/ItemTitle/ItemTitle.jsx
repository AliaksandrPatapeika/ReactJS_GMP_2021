import './ItemTitle.less';

import PropTypes from 'prop-types';
import React from 'react';

const ItemTitle = ({description}) => <div className="itemTitle">{description}</div>;

ItemTitle.propTypes = {
  description: PropTypes.string.isRequired
};

export default ItemTitle;
