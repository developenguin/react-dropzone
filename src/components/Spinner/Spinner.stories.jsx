import React from 'react';
import Spinner from './';
import { color, number, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Spinner',
  component: Spinner,
  decorators: [withKnobs]
};

export const withDefaults = () => (
  <Spinner
    color={color('Color', '#00ff00')}
    size={number('Size', 65)}
  />
);
