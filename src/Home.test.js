import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

//Enzyme.configure({ Adapter: new Adapter() });

describe('Home test', () => {
    it('Test tags ', () => {
     const wrapper = shallow(<Home/>);
     const text = wrapper.find('div BlogList');
     expect(text.length).toBe(0);
    });
});

