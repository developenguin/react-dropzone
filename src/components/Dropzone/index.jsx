import React, { createRef } from 'react';
import propTypes from 'prop-types';
import styles from './styles.scss';

const Dropzone = props => {

  let fileInputRef = createRef();

  const onClickDropzone = () => {
    fileInputRef.current.click();
  };

  const onFileChange = evt => {

    const { files } = evt.target;

    props.onFileChange(Array.from(files));

  };

  return (
    <div
      className={styles.container}
      onClick={onClickDropzone}
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
