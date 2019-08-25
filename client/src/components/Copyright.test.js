import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import { Copyright } from './Copyright';

describe('Copyright', () => {
    it('should render correctly', () => {
      const component = shallow(<Copyright name="Hello"/>);
    
      expect(component).toMatchSnapshot();
    });
});