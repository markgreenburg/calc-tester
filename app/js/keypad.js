import React, { Component } from 'react';
import Key from './key.js';
import PropTypes from 'prop-types';

const Keypad = (props) => {
  return (
    <div className="calculator__keypad">
      <div className="keypad__left">
        <div className="left__firstrow">
          <Key
            displayValue="AC"
            handleClick={props.inputClear}
          />
          <Key
            displayValue="+/−"
            handleClick={props.inputReverse}
          />
          <Key
            displayValue="%"
            handleClick={props.inputPercent}
          />
        </div>
        <div className="left__secondrow">
          <Key
            displayValue="9"
            inputType="number"
            handleClick={props.inputNumber}
          />
          <Key
            displayValue="8"
            inputType="number"
            handleClick={props.inputNumber}
          />
          <Key
            displayValue="7"
            inputType="number"
            handleClick={props.inputNumber}
          />
        </div>
        <div className="left__thirdrow">
          <Key
            displayValue="6"
            inputType="number"
            handleClick={props.inputNumber}
          />
          <Key
            displayValue="5"
            inputType="number"
            handleClick={props.inputNumber}
          />
          <Key
            displayValue="4"
            inputType="number"
            handleClick={props.inputNumber}
          />
        </div>
        <div className="left__fourthrow">
          <Key
            displayValue="3"
            inputType="number"
            handleClick={props.inputNumber}
          />
          <Key
            displayValue="2"
            inputType="number"
            handleClick={props.inputNumber}
          />
          <Key
            displayValue="1"
            inputType="number"
            handleClick={props.inputNumber}
          />
        </div>
        <div className="left__fifthrow">
          <Key
            className="zero"
            displayValue="0"
            inputType="number"
            handleClick={props.inputNumber}
          />
          <Key
            displayValue="."
            inputType="number"
            handleClick={props.inputNumber}
          />
        </div>
      </div>
      <div className="keypad__right">
        <Key
          displayValue="/"
          inputType="operation"
          handleClick={props.inputOperator}
        />
        <Key
          displayValue="x"
          inputType="operation"
          handleClick={props.inputOperator}
        />
        <Key
          displayValue="-"
          inputType="operation"
          handleClick={props.inputOperator}
        />
        <Key
          displayValue="+"
          inputType="operation"
          handleClick={props.inputOperator}
        />
        <Key
          displayValue="="
          inputType="operation"
          handleClick={props.inputEqual}
        />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  inputNumber: PropTypes.func.isRequired,
  inputClear: PropTypes.func.isRequired,
  inputReverse: PropTypes.func.isRequired,
  inputOperator: PropTypes.func.isRequired,
  inputPercent: PropTypes.func.isRequired,
  inputEqual: PropTypes.func.isRequired,
};

export default Keypad;