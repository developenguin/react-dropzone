import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import styles from './styles.stories.scss';
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
    isDisabled={boolean('Disabled', false)}
  />
);

export const withCustomStyling = () => (
  <Dropzone
    onFileChange={files => console.table(files)}
    label={text('Label', 'This one has custom styling.')}
    isDisabled={boolean('Disabled', false)}
    containerClassName={styles.customContainer}
    dragFilesClassName={styles.customDragFiles}
    containerHoverClassName={styles.customContainerHover}
    containerDisabledClassName={styles.disabled}
  />
);
