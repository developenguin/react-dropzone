import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Dropzone from './';

export default {
  title: 'Dropzone',
  decorators: [ withKnobs ]
};

export const withDefaults = () => (
  <Dropzone
    onFileChange={files => console.table(files)}
    label={text('Label', 'Click or drag to upload.')}
  />);
