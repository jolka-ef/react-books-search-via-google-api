import React from 'react';
import '../../css/components/Input.css';
import PropTypes from 'prop-types';


export const Input = (props) => {
  return (
    <>
      <label
        className={props.labelClass}
        htmlFor={props.name}
      >
        {props.label}
      </label>

      <input
        aria-label={props.ariaLabel}
        className={props.inputClass}
        id={props.name}
        name={props.name}
        type={props.type}
      />
    </>
  )
};

Input.propTypes = {
  ariaLabel: PropTypes.string,
  inputClass: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

