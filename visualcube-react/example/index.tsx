import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { VisualCube } from '../.';

const App = () => {
  return (
    <div>
      <VisualCube options={{}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
