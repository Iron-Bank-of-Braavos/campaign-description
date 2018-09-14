import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import About from './components/About.jsx'

const Main = styled.div`
  color: #020621;
  font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, "Liberation Sans", FreeSans, sans-serif;
  line-height: 1.4;
`;

const Row = styled.div`
  width: 100%;
  flex-wrap: wrap;

  &.row:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Description = styled.div`
  float: left;
  width: 66.67%;
  background-color: white;

  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 0px;
  }
`;

const Pledges = styled.div`
  float: left;
  width: 33.33%;
  height: 500px;
  background-color: lightgray;

  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 0px;
    display: none;
  }
`;



const App = props => (
  <Main>
    <Row className="row">
      <Description>
        <h3>About</h3>
        <About />
      </Description>

      <Pledges>
        <h3>Support</h3>
        {/* Insert pledge rewards here */}
      </Pledges>
    </Row>
  </Main>
);

ReactDOM.render(<App />, document.getElementById('app'));