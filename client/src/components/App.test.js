import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import App from './App';

describe('Copyright', () => {
    it('should render correctly', () => {
      const component = shallow(<App />);
    
      expect(component).toMatchSnapshot();
    });
});