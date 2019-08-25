import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { mount } from 'enzyme';

import DynamicTableHead from './DynamicTableHead';

const tableCols = [
    {id: 1, name: 'Name'}, 
    {id: 2, name: 'Categories'}, 
    {id: 3, name: 'Location'}, 
    {id: 4, name: 'City'}, 
    {id: 5, name: 'State'}
  ];

describe('DynamicTableHead', () => {
    it('should render correctly', () => {
      const component = mount(<DynamicTableHead headernames={tableCols} />);
    
      expect(component).toMatchSnapshot();
    });
});