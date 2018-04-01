import React from 'react';
import { shallow , mount } from 'enzyme';
import expect from 'expect';
import CourseForm from '../CourseForm';

function setUp(saving){
    let props = {
        course : {}, saving : saving , errors : {},
        onSave: () => {},
        onChange: () => {}
    }
    return shallow(<CourseForm {...props} />);
}

describe('Test with Enzyme' , () => {
     it('render from and h1' , () => {
         const wrapper = setUp(false);
         expect(wrapper.find('form').length).toBe(1);
         expect(wrapper.find('h1').text()).toEqual('Manage Course')
     })

     it('save button when loading is false' , () => {
        const wrapper = setUp(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    })

    it('save button when loading is true' , () => {
        const wrapper = setUp(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    })
});