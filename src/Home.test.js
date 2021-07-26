import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Home from './Home';

//Enzyme.configure({ Adapter: new Adapter() });

describe('Home test having no text', () => {
    it('Test tags ', () => {
     const wrapper = shallow(<Home/>);
     const text = wrapper.find('div BlogList');
     expect(text.length).toBe(0);
    });
});

