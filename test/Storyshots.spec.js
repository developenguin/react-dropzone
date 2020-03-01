import initStoryshots from '@storybook/addon-storyshots';
import path from 'path';
import { render } from '@testing-library/react';


const reactTestingLibrarySerializer = {
  print: (val, serialize, indent) => serialize(val.container.firstChild),
  test: (val) => val && val.hasOwnProperty('container')
};

initStoryshots({
  configPath: path.join(__dirname, '..', '.storybook'),
  framework: 'react',
  renderer: render,
  snapshotSerializers: [reactTestingLibrarySerializer],
  storyKindRegex: /^((?!.*?DontTest).)*$/
});
