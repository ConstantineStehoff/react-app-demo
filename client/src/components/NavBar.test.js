import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import { NavBar } from './NavBar';

describe('NavBar', () => {
    it('should render correctly', () => {
      const component = shallow(<NavBar />);
    
      expect(component).toMatchSnapshot();
    });
});