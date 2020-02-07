import React, { createRef, useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Dropzone = props => {

  let fileInputRef = createRef();
  let [ isHovering, setIsHovering ] = useState(false);

  const onClickDropzone = () => {
    fileInputRef.current.click();
  };

  const onDragOver = evt => {

    stopEvent(evt);

    if (props.isDisabled) {
      return;
    }

    setIsHovering(true);

  };

  const onDragLeave = evt => {

    stopEvent(evt);

    if (props.isDisabled) {
      return;
    }

    setIsHovering(false);

  };

  const onDrop = evt => {

    stopEvent(evt);

    if (props.isDisabled) {
      return;
    }

    const { files } = evt.dataTransfer;

    props.onFileChange(files);

    setIsHovering(false);

  };

  const onFileChange = evt => {

    if (props.isDisabled) {
      return;
    }

    const { files } = evt.target;

    props.onFileChange(files);

  };

  const stopEvent = evt => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  const classes = classNames({
    [styles.container]: true,
    [styles.containerHover]: isHovering,
    [styles.disabled]: props.isDisabled
  });

  return (
    <div
      className={classes}
      onClick={onClickDropzone}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <input
        type="file"
        multiple
        className={styles.input}
        ref={fileInputRef}
        onChange={onFileChange}
        disabled={props.isDisabled}
      />
      <div className={styles.dragFiles}>
        <p>{props.label}</p>
      </div>
    </div>
  );

};

Dropzone.propTypes = {
  onFileChange: propTypes.func.isRequired,
  label: propTypes.string,
  isDisabled: propTypes.bool
};

export default Dropzone;
