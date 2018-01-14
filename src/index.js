import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h1>Mike was here</h1>
    <h1>I WANT TO CONTRIBUTE!!!</h1>
    <h3>More Changes!</h3>
    <h2>Start editing to see some magc happen {'\u2728'}</h2>
    <h1>Rachel Changed something here</h1>
    <p>Cody made further changes.</p>
  </div>
);

render(<App />, document.getElementById('root'));
