import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import { Venues } from './Venues';

const venues = [
    {
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
    },
    {
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
];

describe('Venues', () => {
    it('should render correctly', () => {
      const component = shallow(<Venues venues={venues} />);
    
      expect(component).toMatchSnapshot();
    });
});