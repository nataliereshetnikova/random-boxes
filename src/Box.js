import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

const Box = ({color}) => {
    const styles = { backgroundColor: color};
    return (
      <div className = "box" style={styles}>

      </div>
    );
  }
  
  Box.propTypes = {
    color: PropTypes.string,
  };
  export default Box;