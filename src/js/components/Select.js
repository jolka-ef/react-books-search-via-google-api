import React from 'react';
import PropTypes from 'prop-types';

import '../../css/components/Select.css'

export const Select = (props) => {
  const {
    inputClass,
    labelClass,
    label,
    name,
    options,
  } = props;

  const getOptions = options =>
    options.map((o) =>
      <option key = {o.value} value = {o.value}>
        {o.label}
      </option>
  );

  return (
    <>
      <label
        className={labelClass}
        htmlFor={name}>
        {label}
      </label>

      <select
        className={inputClass}
        id={name}
        name={name}
      >
        {getOptions(options)}
      </select>

    </>
  )
};

Select.propTypes = {
  inputClass: PropTypes.string,
  label : PropTypes.string,
  labelClass: PropTypes.string,
  name : PropTypes.string,
  options : PropTypes.array,
}
