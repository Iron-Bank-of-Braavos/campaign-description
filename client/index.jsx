import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import About from './components/About.jsx'

const Main = styled.div`
  color: #020621;
  font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, "Liberation Sans", FreeSans, sans-serif;
  line-height: 1.4;

  &.pad-1 {
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;
  }
`;

const Container = styled.div`
  &.pad-2 {
    padding-left: 1.8rem;
    padding-right: 1.8rem;
  }
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
  
  &.pad-3 {
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    box-sizing: border-box;
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
  
  &.pad-4 {
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    box-sizing: border-box;
  }
`;

const Header = styled.h3`
  font-size: 2.1rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;



const App = props => (
  <Main className="pad-1">
    <Container className="pad-2">
      <Row className="row">
        <Description className="pad-3">
          <Header>About</Header>
          <About />
        </Description>

        <Pledges className="pad-4">
          <Header>Support</Header>
          {/* Insert pledge rewards here */}
        </Pledges>
      </Row>
    </Container>
  </Main>
);

ReactDOM.render(<App />, document.getElementById('app'));