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
    setIsHovering(true);
  };

  const onDragLeave = evt => {
    stopEvent(evt);
    setIsHovering(false);
  };

  const onDrop = evt => {

    stopEvent(evt);

    const { files } = evt.dataTransfer;

    props.onFileChange(files);

    setIsHovering(false);

  };

  const onFileChange = evt => {

    const { files } = evt.target;

    props.onFileChange(files);

  };

  const stopEvent = evt => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  const classes = classNames({
    [styles.container]: true,
    [styles.containerHover]: isHovering
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
      />
      <div className={styles.dragFiles}>
        <p>Drag files here or click to upload</p>
      </div>
    </div>
  );

};

Dropzone.propTypes = {
  onFileChange: propTypes.func.isRequired
};

export default Dropzone;
