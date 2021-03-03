import '../less/components/ItemImage.less';

import PropTypes from 'prop-types';
import React from 'react';

const ItemImage = ({url}) => <img src={url} alt="Item" className="itemImage" />;

ItemImage.propTypes = {
  url: PropTypes.string.isRequired
};

export default ItemImage;
