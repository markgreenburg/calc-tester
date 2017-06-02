import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Results = (props) => {
    return (
      <div className="calculator__results">
        {props.displayValue || '0'}
      </div>
    );
};

Results.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Results;