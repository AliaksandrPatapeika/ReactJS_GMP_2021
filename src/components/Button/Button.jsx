import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  className, onClick, title, children
}) => (
  <button type="button" className={className} onClick={onClick}>
    {title}
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  className: '',
  title: '',
  children: ''
};

export default Button;
