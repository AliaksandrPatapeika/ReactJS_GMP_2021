import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  type, className, onClick, disabled, title, children
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} disabled={disabled} className={className} onClick={onClick}>
    {title}
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
  disabled: '',
  title: '',
  children: ''
};

export default Button;
