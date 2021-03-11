import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';

import ClearIndicator from './components/ClearIndicator';
import DropdownIndicator from './components/DropdownIndicator';
import MultiValue from './components/MultiValue';
import Option from './components/Option';
import ValueContainer from './components/ValueContainer';

const Select = (props) => {
  const {isMulti, allowSelectAll} = props;

  if (isMulti && allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[props.allOption, ...props.options]}
        components={{
				  ClearIndicator,
				  DropdownIndicator,
				  MultiValue,
				  Option,
				  ValueContainer
        }}
        onChange={(selected, event) => {
				  if (selected !== null && selected.length > 0) {
				    if (selected[selected.length - 1].value === props.allOption.value) {
				      return props.onChange([props.allOption, ...props.options]);
				    }
				    let result = [];

				    if (selected.length === props.options.length) {
				      if (selected.includes(props.allOption)) {
				        result = selected.filter(
				          (option) => option.value !== props.allOption.value
				        );
				      } else if (event.action === 'select-option') {
				        result = [props.allOption, ...props.options];
				      }
				      return props.onChange(result);
				    }
				  }

				  return props.onChange(selected);
        }}
      />
    );
  }

  return (
    <ReactSelect
      {...props}
      components={{
			  DropdownIndicator
      }}
    />
  );
};

Select.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  value: PropTypes.instanceOf(Object),
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  allowSelectAll: PropTypes.bool,
  allSelectedLabel: PropTypes.string,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

Select.defaultProps = {
  allSelectedLabel: 'All is selected',
  isMulti: false,
  allowSelectAll: false,
  value: {},
  allOption: {
    label: 'Select all',
    value: '*'
  }
};

export default Select;
