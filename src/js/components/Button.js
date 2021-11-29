import React from 'react';
import PropTypes from 'prop-types';
import '../../css/components/Button.css'



export const Button = (props) => {
  return (
    <button
      className="Button"
      onClick={props.onClick}
      type={props.type}
    >
      {props.name}
    </button>
  )
};

Button.propTypes = {
  onClick : PropTypes.func,
  name : PropTypes.string,
  type: PropTypes.string
};
