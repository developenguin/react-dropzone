import React from 'react';
import Dropzone from './';

export default { title: 'Dropzone' };

export const withDefaults = () => (<Dropzone onFileChange={files => console.table(files)} />);
