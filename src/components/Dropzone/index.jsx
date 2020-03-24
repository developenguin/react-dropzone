import React, { createRef, useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Dropzone = props => {

  let fileInputRef = createRef();
  let [ isHovering, setIsHovering ] = useState(false);
  let [ files, setFiles ] = useState([]);

  const { FileComponent } = props;

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

    onAddNewFiles(evt.dataTransfer.files);

    setIsHovering(false);

  };

  const onFileChange = evt => {

    if (props.isDisabled) {
      return;
    }

    const { files } = evt.target;

    onAddNewFiles(files);

  };

  const onAddNewFiles = addedFiles => {

    props.onFileChange(addedFiles);

    setFiles([...files, ...addedFiles]);

  };

  const stopEvent = evt => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  const containerClasses = classNames({
    [styles.container]: true,
    [props.containerClassName]: props.containerClassName,
    [styles.disabled]: props.isDisabled,
    [props.disabledClassName]: props.isDisabled && props.disabledClassName,
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

  const labelClasses = classNames({
    [styles.label]: true,
    [props.dropzoneLabelClassName]: props.dropzoneLabelClassName
  });

  return (
    <div
      className={`dz-container ${containerClasses} ${props.isDisabled ? 'dz-disabled' : ''}`}
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
        <div className={styles.previewWrapper}>
          {files.map((file, idx) => (
            <FileComponent
              key={`file_${idx}`}
              file={file}
            />
          ))}
        </div>
        {!files.length && <p
          className={`dz-label ${labelClasses}`}
        >{props.label}</p>}
      </div>
    </div>
  );

};

Dropzone.propTypes = {
  FileComponent: propTypes.element.isRequired,
  onFileChange: propTypes.func.isRequired,
  label: propTypes.string,
  isDisabled: propTypes.bool,
  containerClassName: propTypes.string,
  dragFilesClassName: propTypes.string,
  fileInputClassName: propTypes.string,
  containerHoverClassName: propTypes.string,
  disabledClassName: propTypes.string,
  dropzoneLabelClassName: propTypes.string
};

export default Dropzone;
