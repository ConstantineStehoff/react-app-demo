import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import Venue from './Venue';

const row = {
    id: '1',
    name: 'hello',
    categories: [
        {
            name: 'Blah'
        }
    ],
    location: {
        address: '123 2nd st',
        city: 'Seattle',
        state: 'WA'
    }
}

describe('Venue', () => {
    it('should render correctly', () => {
      const component = shallow(<Venue key={row.id} name={row.name} categories={row.categories} location={row.location} />);
    
      expect(component).toMatchSnapshot();
    });
});