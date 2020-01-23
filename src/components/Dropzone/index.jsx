import React from 'react';
import styles from './styles.scss';

const Dropzone = () => {

  return (
    <div className={styles.container}>
      <input type="file" multiple className={styles.input} />
      <div className={styles.dragFiles}>
        <p>Drag files here to upload</p>
      </div>
    </div>
  );

};

export default Dropzone;
