import React, { Component } from 'react';

const Results = (props) => {
    return (
      <div className="calculator__results">
        {props.displayValue || '0'}
      </div>
    );
};

export default Results;