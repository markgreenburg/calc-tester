import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  return (
  <button
    className={props.className ? props.className : ""}
    onClick={() => {
      if (props.inputType === "number" || props.inputType === "operation") {
        props.handleClick(props.displayValue);
      }
      else props.handleClick();
    }}
  >{props.displayValue}</button>)
}

Key.propTypes = {
  displayValue: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Key;