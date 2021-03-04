import PropTypes from 'prop-types';
import React from 'react';

import OopsText from '../OopsText';

const ErrorBoundary = ({children}) => {
  const isEverythingOK = true;

  return <>{isEverythingOK ? children : <OopsText />}</>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
