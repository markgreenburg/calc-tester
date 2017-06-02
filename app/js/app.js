import React, { Component } from 'react';
import { connect } from 'react-redux';

import Results from './results';
import Keypad from './keypad';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      holdValue: '0',
      displayValue: '0',
      currentOperator: null,
      operatorActivated: false,
    };

    this.inputNumber = this.inputNumber.bind(this);
    this.inputClear = this.inputClear.bind(this);
    this.inputReverse = this.inputReverse.bind(this);
    this.inputOperator = this.inputOperator.bind(this);
    this.inputPercent = this.inputPercent.bind(this);
    this.inputEqual = this.inputEqual.bind(this);
  }

  inputNumber(string) {
    if (this.state.operatorActivated) {
     const currentDisplayValue = this.state.displayValue;
     this.setState({
       holdValue: currentDisplayValue,
       displayValue: string,
       operatorActivated: false,
     }, () => console.log(this.state));
     return;
    }
    if (string === "." && this.state.displayValue.indexOf(".") > -1) return;
    if (string === "0" && this.state.displayValue === "0") return;
    this.setState({
      displayValue: this.state.displayValue + string,
    }, () => console.log(this.state.displayValue));
  }

  inputDecimalDot() {
    if (this.state.displayValue.indexOf(".") > -1) return;
    this.setState({
      displayValue: this.state.displayValue + numString,
    }, () => console.log(this.state.displayValue));
  }

  inputClear() {
    this.setState({
      displayValue: '',
      currentOperator: null,
    }, () => {
      console.log(this.state.displayValue);
    });
  }

  inputReverse() {
    let newDisplayValue;
    if (this.state.displayValue[0] === "-") {
      newDisplayValue = this.state.displayValue.replace(/-/,"");
    }
    else {
      newDisplayValue = "-" + this.state.displayValue;
    }
    this.setState({ displayValue: newDisplayValue }, () => {
      console.log(this.state);
    });
  }

  inputPercent() {
    if (this.state.displayValue != "0") {
      this.setState({ displayValue: this.state.displayValue / 100 }, () => {
        console.log(this.state.displayValue);
      });
    }
  }

  inputOperator(operator) {
    if (this.state.currentOperator) this.inputEqual();
    // Refactor: possible race condition - switch to redux should eliminate
    this.setState({
      currentOperator: operator,
      operatorActivated: true,
    }, () => {
      console.log(this.state.currentOperator, this.state.operatorActivated);
    });
  }

  inputEqual() {
    let total;
    const hold = parseFloat(this.state.holdValue);
    const display = parseFloat(this.state.displayValue);
    switch (this.state.currentOperator) {
      case "+":
        total = hold + display;
        break;
      case "-":
        total = hold - display;
        break;
      case "x":
        total = hold * display;
        break;
      case "/":
        total = hold / display;
        break;
      default:
        total = display;
    }
    this.setState({
      total,
      displayValue: String(total),
      holdValue: '0',
      currentOperator: null,
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div id="calculator" className="calculator">
        <Results
          displayValue={this.state.displayValue}
        />
        <Keypad
          currentOperator={this.state.currentOperator}
          inputNumber={this.inputNumber}
          inputClear={this.inputClear}
          inputReverse={this.inputReverse}
          inputOperator={this.inputOperator}
          inputPercent={this.inputPercent}
          inputEqual={this.inputEqual}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
