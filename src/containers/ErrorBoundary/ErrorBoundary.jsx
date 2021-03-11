/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import OopsText from '../../components/OopsText';

class ErrorBoundary extends Component {
	state = {
	  hasError: false
	};

	static getDerivedStateFromError() {
	  return {hasError: true};
	}

	componentDidCatch(error, errorInfo) {
	  console.log('error: ', error);
	  console.log('errorInfo: ', errorInfo);
	}

	render() {
	  const {hasError} = this.state;
	  const {children} = this.props;

	  return <>{hasError ? <OopsText /> : children}</>;
	}
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
