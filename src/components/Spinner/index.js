import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';

const Spinner = props => {

  const style = {
    display: 'inline-block',
    width: `${props.size}px`,
    height: `${props.size}px`,
    background: `${props.color}`,
    borderRadius: '50%',
    animation: 'sk-scaleout 1.0s infinite ease-in-out'
  };

  return (
    <div style={style} />
  );

};

Spinner.propTypes = {
  color: propTypes.string,
  size: propTypes.number
};

Spinner.defaults = {
  color: '#fff',
  size: 50
};

export default Spinner;
