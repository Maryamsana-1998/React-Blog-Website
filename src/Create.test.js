import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Create from './Create';
import { cleanup } from '@testing-library/react';
import { Router, Switch, Route, useParams } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from 'react-dom';

jest.mock('react-router-dom', () => ({
    useParams: () => ({ id: 1 }),
}));

afterEach(() => {
    cleanup();
});


describe('Create component functionality', () => {

    it('Test Add blog heading', () => {
        const history = createMemoryHistory();
        const route = '/create/add';
        history.push(route);

        // jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' });

        const wrapper = mount(<Create />);
        const txt = wrapper.find('div h2');
        expect(txt.text()).toBe('Add a New Blog');
    });

    it('Test form with title input', () => {
        const history = createMemoryHistory();
        const route = '/create/add';
        history.push(route);
        const wrapper = mount(<Create update={true} />);
        const txt = wrapper.find('select');
        expect(txt.props().value).toBe('mario');
        
    });
 
    it('Test add button', async () => {
        const wrapper = mount(<Create  />);
        const buttons = wrapper.find('button')
       // const button = wrapper.find('div h2 form button'); 
      /*   const mockCallBack = jest.fn(); */
      /*   button.simulate('click'); */
      /*   expect(mockCallBack.mock.calls.length).toEqual(1); */
        expect(buttons).toHaveLength(1);

    });
/*
    it('Test update button', () => {
     
    }); */
});
