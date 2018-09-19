import React from 'react';
import Enzyme from 'enzyme';
import Main from '../../client/components/Main.jsx';

describe('Main Component', () => {
  it('should be defined', () => {
    expect(Main).toBeDefined();
  });

  it('should render component without props', () => {
    const mainComponent = Enzyme.shallow(<Main />);
    expect(mainComponent).toMatchSnapshot();
  })
});