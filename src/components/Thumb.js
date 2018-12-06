import React from 'react';
import PropTypes from 'prop-types';

const Thumb = props => {
  return (
    <div className={props.classes}>
      <img src={props.src} alt={props.alt} title={props.title} />
    </div>
  );
};

Thumb.PropTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Thumb;
