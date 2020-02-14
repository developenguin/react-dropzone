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

  const containerClasses = classNames({
    [styles.container]: true,
    [props.containerClassName]: props.containerClassName,
    [styles.disabled]: props.isDisabled,
    [props.disabledClassName]: props.disabledClassName && props.isDisabled,
    [styles.containerHover]: isHovering,
    [props.containerHoverClassName]: isHovering && props.containerHoverClassName
  });

  const dragFileClasses = classNames({
    [styles.dragFiles]: true,
    [props.dragFilesClassName]: props.dragFilesClassName
  });

  const inputClasses = classNames({
    [styles.input]: true,
    [props.fileInputClassName]: props.fileInputClassName
  });

  return (
    <div
      className={`dz-container ${containerClasses}${props.isDisabled ? 'dz-disabled' : ''}`}
      onClick={onClickDropzone}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <input
        type="file"
        multiple
        className={`dz-input ${inputClasses}`}
        ref={fileInputRef}
        onChange={onFileChange}
        disabled={props.isDisabled}
      />
      <div className={`dz-drag-files ${dragFileClasses}`}>
        <p>{props.label}</p>
      </div>
    </div>
  );

};

Dropzone.propTypes = {
  onFileChange: propTypes.func.isRequired,
  label: propTypes.string,
  isDisabled: propTypes.bool,
  containerClassName: propTypes.string,
  dragFilesClassName: propTypes.string,
  fileInputClassName: propTypes.string,
  containerHoverClassName: propTypes.string,
  disabledClassName: propTypes.string
};

export default Dropzone;
