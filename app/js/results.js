import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Results = (props) => {
    let actualDisplay;
    if (props.displayValue[0] !== "0"
        && props.displayValue.length > 1
        && props.displayValue[1] !== ".") {
      actualDisplay = props.displayValue.substr(1);
    } else {
      actualDisplay = props.displayValue;
    }
    
    return (
      <div className="calculator__results">
        {actualDisplay || '0'}
      </div>
    );
};

Results.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Results;