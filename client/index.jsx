import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About.jsx'

const App = props => (
  <div>
    <h4>About</h4>
    <About />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));