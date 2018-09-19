import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Main from './components/Main.jsx';


const App = props => (
  <div>
    <Main paragraphs={faker.lorem.paragraphs()} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));