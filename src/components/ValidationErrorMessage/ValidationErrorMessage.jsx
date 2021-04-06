import './ValidationErrorMessage.less';

import PropTypes from 'prop-types';
import React from 'react';

function ValidationErrorMessage({children}) {
  return <span className="validationErrorMessage">{children}</span>;
}

ValidationErrorMessage.propTypes = {
  children: PropTypes.node.isRequired
};

export default ValidationErrorMessage;
