import { withKnobs } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import File from './index';

export const asDefault = () => {

  const [ file, setFile ] = useState(null);

  const onChangeFile = evt => {

    evt.stopPropagation();
    evt.preventDefault();

    const { files } = evt.target;
    setFile(files[0]);

  };

  return (
    <>
      <input type="file" onChange={onChangeFile}/>
      {file && <File
        file={file}
      />}
    </>
  );
};

export default {
  title: 'File',
  decorators: [ withKnobs ]
};
