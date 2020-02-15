import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from './styles.scss';

const File = props => {

  const [imgData, setImgData] = useState(null);
  const isImageType = props.file.type.toLowerCase().includes('image/');
  const ext = props.file.name
    .toUpperCase()
    .split('.')
    .slice(-1);

  useEffect(() => {

    const reader = new FileReader();

    reader.onload = e => {
      setImgData(e.target.result);
    };

    if (props.file) {
      reader.readAsDataURL(props.file);
    }

  }, [props.file]);

  return (
    <div className={styles.file}>
      {isImageType && <img
        className={styles.imgPreview}
        src={imgData}
        alt={props.file.name}
      />}
      {!isImageType && <div
        className={styles.filePreview}
      >
        {ext}
      </div>}
      <div className={styles.fileName}>{props.file.name}</div>
    </div>
  );

};

File.propTypes = {
  file: propTypes.shape({
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired
  })
};

export default File;
