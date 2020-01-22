import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from './components/Dropzone';

const App = () => {
  return (
    <Dropzone/>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
