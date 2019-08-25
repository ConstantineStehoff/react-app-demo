import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { mount } from 'enzyme';

import Title from './Title';

describe('Title', () => {
    it('should render correctly', () => {
      const component = mount(<Title>Hi</Title>);
    
      expect(component).toMatchSnapshot();
    });
});