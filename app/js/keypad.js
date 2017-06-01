import React, { Component } from 'react';
import Key from './key.js';

export default class Keypad extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="calculator__keypad">
        <div className="keypad__left">
          <div className="left__firstrow">
            <Key
              displayValue="AC"
              handleClick={this.props.inputClear}
            />
            <Key
              displayValue="+/−"
              handleClick={this.props.inputReverse}
            />
            <Key
              displayValue="%"
              handleClick={this.props.inputPercent}
            />
          </div>
          <div className="left__secondrow">
            <Key
              displayValue="9"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
            <Key
              displayValue="8"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
            <Key
              displayValue="7"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
          </div>
          <div className="left__thirdrow">
            <Key
              displayValue="6"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
            <Key
              displayValue="5"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
            <Key
              displayValue="4"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
          </div>
          <div className="left__fourthrow">
            <Key
              displayValue="3"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
            <Key
              displayValue="2"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
            <Key
              displayValue="1"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
          </div>
          <div className="left__fifthrow">
            <Key
              className="zero"
              displayValue="0"
              inputType="number"
              handleClick={this.props.inputNumber}
            />
            <Key
              displayValue="."
              inputType="number"
              handleClick={this.props.inputNumber}
            />
          </div>
        </div>
        <div className="keypad__right">
          <Key
            displayValue="/"
            inputType="operation"
            handleClick={this.props.inputOperator}
          />
          <Key
            displayValue="x"
            inputType="operation"
            handleClick={this.props.inputOperator}
          />
          <Key
            displayValue="-"
            inputType="operation"
            handleClick={this.props.inputOperator}
          />
          <Key
            displayValue="+"
            inputType="operation"
            handleClick={this.props.inputOperator}
          />
          <Key
            displayValue="="
            inputType="operation"
            handleClick={this.props.inputEqual}
          />
        </div>
      </div>
    );
  }
}