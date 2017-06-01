import React, { Component } from 'react';

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

export default Key;